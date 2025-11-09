import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAnimalsByTypeSlug } from "../lib/animals.service";
import AnimalCard from "../components/AnimalCard";
import AnimalDetail3DCard from "../components/AnimalDetail3DCard";
import Footer from "../components/Footer";

const TYPE_LABELS: Record<string, string> = {
  snake: "Serpientes",
  lizard: "Lagartos",
  gecko: "Geckos",
  amphibian: "Anfibios",
  arthropod: "Artrópodos",
  turtle: "Tortugas",
};

export default function Species() {
  const [params] = useSearchParams();
  const type = params.get("type") || "";
  const [animals, setAnimals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnimal, setSelectedAnimal] = useState<any | null>(null);

  const title = useMemo(() => {
    if (!type) return "Todas las especies";
    return TYPE_LABELS[type] || type.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
  }, [type]);

  useEffect(() => {
    (async () => {
      const data = await getAnimalsByTypeSlug(type);
      setAnimals(data);
      setLoading(false);
    })();
  }, [type]);

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center bg-gray-950 text-white"
        role="status"
        aria-live="polite"
        aria-busy="true"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-full border-4 border-cyan-400/30 border-t-cyan-400 animate-spin" />
          <div className="text-center">
            <p className="text-lg md:text-xl bg-linear-to-r from-cyan-300 via-emerald-300 to-blue-300 bg-clip-text text-transparent tracking-tight font-semibold">
              Cargando tipos...
            </p>
            <span className="sr-only">Cargando contenido</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <main className="grow p-6 relative">
        {/* Cabecera centrada */}
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-center text-3xl font-bold">{title}</h1>
        </div>

        {/* Grid de animales */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-[filter,transform] duration-300 ${
            selectedAnimal ? "blur-md scale-[0.98]" : ""
          }`}
        >
          {animals.map((a) => (
            <div key={a.id} onClick={() => setSelectedAnimal(a)}>
              <AnimalCard animal={a} />
            </div>
          ))}
        </div>

        {/* Overlay de detalle */}
        {selectedAnimal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
            <AnimalDetail3DCard animal={selectedAnimal} onClose={() => setSelectedAnimal(null)} />
          </div>
        )}
      </main>

      {/* Footer translúcido */}
      <Footer />
    </div>
  );
}
