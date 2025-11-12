import { useEffect, useState } from "react";
import { getTypes, type SpeciesType } from "../lib/types.service";
import TypesFocus from "../components/TypesFocus";
import logo from "../assets/logo-terrarium-no-text-lime-green.png";
import Footer from "../components/Footer";

export default function Types() {
  const [types, setTypes] = useState<SpeciesType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getTypes();
      setTypes(data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center bg-gray-950 text-white"
        role="status"
        aria-live="polite"
        aria-busy="true"
      >
        <div className="flex flex-col items-center gap-4">
          <div
            className="
              w-10 h-10 
              rounded-full 
              border-4 border-cyan-400/30 border-t-cyan-400 
              animate-spin
            "
          />
          <div className="text-center">
            <p
              className="
                text-lg md:text-xl 
                bg-linear-to-r from-cyan-300 via-emerald-300 to-blue-300 
                bg-clip-text text-transparent
                tracking-tight
                font-semibold
              "
            >
              Cargando tipos...
            </p>
            <span className="sr-only">Cargando contenido</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      {/* Contenido principal que crece para empujar el footer */}
      <main className="flex-1 text-white p-6">
        {/* 🌿 Header superior con logo y título */}
        <header className="flex items-center gap-4 mb-10 animate-fade-in">
          <img
            src={logo}
            alt="Terrarium Logo"
            className="h-12 w-auto object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
          />
          <h2
            className="
              text-3xl md:text-4xl font-semibold 
              text-white
              font-extrabold
              bg-clip-text text-transparent
              drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]
              tracking-tight
            "
          >
            Categorías
          </h2>
        </header>

        {/* 🌱 Contenido principal */}
        <TypesFocus items={types} />
      </main>

      {/* Footer siempre al fondo */}
      <Footer />
    </div>
  );
}
