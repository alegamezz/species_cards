import { useEffect, useMemo, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { getAnimalsByTypeSlug } from "../lib/animals.service";
import AnimalCard from "../components/AnimalCard";
import AnimalDetail3DCard from "../components/AnimalDetail3DCard";
import Footer from "../components/Footer";
import logo from "../assets/logo-terrarium-no-text-lime-green.png";
import RequestSpeciesModal from "../components/ResquestSpeciesModal";

const TYPE_LABELS: Record<string, string> = {
  snake: "Serpientes",
  lizard: "Lagartos",
  gecko: "Geckos",
  amphibian: "Anfibios",
  arthropod: "Artrópodos",
  turtle: "Tortugas",
};

// Hook personalizado para detectar swipe
const useSwipe = (onSwipeLeft?: () => void, onSwipeRight?: () => void) => {
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;

    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && onSwipeLeft) {
      onSwipeLeft();
    }
    if (isRightSwipe && onSwipeRight) {
      onSwipeRight();
    }
  };

  return { onTouchStart, onTouchMove, onTouchEnd };
};

export default function Species() {
  const [params] = useSearchParams();
  const type = params.get("type") || "";
  const [animals, setAnimals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnimal, setSelectedAnimal] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const title = useMemo(() => {
    if (!type) return "Todas las especies";
    return (
      TYPE_LABELS[type] ||
      type.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase())
    );
  }, [type]);

  useEffect(() => {
    (async () => {
      const data = await getAnimalsByTypeSlug(type);
      setAnimals(data);
      setLoading(false);
    })();
  }, [type]);

  const swipeHandlers = useSwipe(
    () => {
      // Swipe left - siguiente animal
      if (selectedAnimal) {
        const idx = animals.findIndex((a) => a.id === selectedAnimal.id);
        if (idx < animals.length - 1) {
          setSelectedAnimal(animals[idx + 1]);
        }
      }
    },
    () => {
      // Swipe right - animal anterior
      if (selectedAnimal) {
        const idx = animals.findIndex((a) => a.id === selectedAnimal.id);
        if (idx > 0) {
          setSelectedAnimal(animals[idx - 1]);
        }
      }
    }
  );

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center bg-gray-950 text-white"
        role="status"
        aria-live="polite"
        aria-busy="true"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-full border-4 border-cyan-400/20 border-t-cyan-400 animate-spin" />
            <div
              className="absolute inset-0 w-12 h-12 rounded-full border-4 border-emerald-400/20 border-b-emerald-400 animate-spin animation-delay-150"
              style={{ animationDirection: "reverse" }}
            />
          </div>
          <div className="text-center">
            <p className="text-lg md:text-xl bg-gradient-to-r from-cyan-300 via-emerald-300 to-blue-300 bg-clip-text text-transparent tracking-tight font-semibold animate-pulse">
              Cargando especies...
            </p>
            <span className="sr-only">Cargando contenido</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <main className="grow p-4 sm:p-6 relative">
        {/* Cabecera con animación de entrada */}
        <header className="flex items-center justify-between mb-10 animate-fade-in">
          {/* Logo + título */}
          <div className="flex items-center gap-4">
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
              {title}
            </h2>
          </div>

          {/* Botón a la derecha */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="
              px-5 py-2.5
              text-sm md:text-base font-medium 
              text-white 
              bg-gradient-to-r from-green-600 to-emerald-600 
              hover:from-green-700 hover:to-emerald-700
              rounded-lg shadow-md 
              transition-all
              focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-900
            "
          >
            Solicitar nueva especie
          </button>
        </header>

        {/* Grid de animales con stagger animation */}
        <div
          className={`flex flex-col items-center gap-4 sm:gap-5 md:grid md:grid-cols-2 md:gap-4 transition-[filter,transform] duration-300 ${
            selectedAnimal ? "blur-md scale-[0.98]" : ""
          }`}
        >
          {animals.map((a, idx) => (
            <div
              key={a.id}
              onClick={() => setSelectedAnimal(a)}
              className="w-full flex justify-center md:block animate-fade-in-up"
              style={{
                animationDelay: `${idx * 50}ms`,
              }}
            >
              <AnimalCard animal={a} />
            </div>
          ))}
        </div>

        {/* Overlay de detalle con swipe */}
        {selectedAnimal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
            {...swipeHandlers}
          >
            <div className="relative w-full max-w-4xl">
              <AnimalDetail3DCard
                animal={selectedAnimal}
                onClose={() => setSelectedAnimal(null)}
              />

              {/* Indicadores de swipe (solo móvil) */}
              <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
                {animals.map((a) => (
                  <div
                    key={a.id}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      a.id === selectedAnimal.id
                        ? "w-8 bg-emerald-400"
                        : "w-1.5 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Modal de solicitud de especie */}
        <RequestSpeciesModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </main>

      <Footer />
    </div>
  );
}
