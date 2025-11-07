import React from "react";
import MapChart from "./MapChart";

interface AnimalProCardProps {
    name: string;
    scientificName: string;
    image: string;
    habitat: string;
    diet: string;
    status: string;
    countries?: string[];
  }

const statusColors: Record<string, string> = {
  LC: "bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/40",
  "Near Threatened": "bg-lime-500/20 text-lime-300 ring-1 ring-lime-400/40",
  NT: "bg-lime-500/20 text-lime-300 ring-1 ring-lime-400/40",
  VU: "bg-amber-500/20 text-amber-300 ring-1 ring-amber-400/40",
  EN: "bg-orange-500/20 text-orange-300 ring-1 ring-orange-400/40",
  CR: "bg-rose-500/20 text-rose-300 ring-1 ring-rose-400/40",
  default: "bg-slate-500/20 text-slate-300 ring-1 ring-slate-400/40",
};


const AnimalProCard: React.FC<AnimalProCardProps> = ({
    name,
    scientificName,
    image,
    habitat,
    diet,
    status,
    countries = [],
  }) => {
  const badgeClass = statusColors[status] ?? statusColors.default;

  return (
    <article
      className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-linear-to-br from-slate-900 to-slate-950 text-white shadow-2xl overflow-hidden"
      aria-label={`${name} (${scientificName})`}
    >
      {/* efecto vidrio */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
      <div className="backdrop-blur-sm bg-white/5 absolute inset-0 opacity-[0.02]" />

      <div className="flex flex-col p-5">
        {/* Encabezado con nombre */}
        <header className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
              {name}
            </h2>
            <p className="text-sm italic text-slate-400">{scientificName}</p>
          </div>
          <span
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${badgeClass}`}
            aria-label={`Estado de conservación: ${status}`}
            title={`Estado: ${status}`}
          >
            {status}
          </span>
        </header>

        {/* Cuerpo con imagen e info */}
        <div className="flex flex-row items-start gap-5">
          {/* Imagen a la izquierda, un poco más abajo */}
          <div className="shrink-0 flex items-center justify-center mt-2 w-1/3">
            <img
              src={image}
              alt={`Imagen de ${name}`}
              className="object-contain max-h-48 drop-shadow-[0_12px_24px_rgba(0,0,0,0.45)]"
              loading="lazy"
              width={256}
              height={192}
            />
          </div>

          {/* Info a la derecha */}
          <div className="flex-1 flex flex-col justify-between">
            <section className="grid grid-cols-1 gap-2 text-sm">
              <p>
                <span className="text-slate-400">Hábitat:</span> {habitat}
              </p>
              <p>
                <span className="text-slate-400">Dieta:</span> {diet}
              </p>
            </section>

            <footer className="mt-4 flex items-end justify-end">
                
            <div className="w-28 h-20 ring-1 ring-white/15 rounded-md overflow-hidden">
              <MapChart highlightCountries={countries} />
            </div>
          </footer>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AnimalProCard;
