// pages/Home.tsx
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDMarquee } from "../components/ui/3d-marquee"; // ajusta la ruta

// Importa tus fuentes de imágenes reales
// por ejemplo desde una consulta o un servicio

export default function Home() {
  const navigate = useNavigate();

  // Sustituye esto por tu lógica real para obtener imágenes
  const images = useMemo(
  () => [
    "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Anolis%20verde.png",
    "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Dragon%20barbudo.png",
    "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Gecko%20crestado.png",
    "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Gecko%20enano%20azul.png",
    "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Gecko%20enlutado.png",
    "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Gecko%20leopardo.png",
    "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Piton%20real.png",
    "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Rana%20dardo%20amarilla.png",
    "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Rana%20dardo%20azul.png",
    "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Rana%20dardo%20fantasma.png",
    "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Rana%20dardo%20verde%20y%20negra.png",
    "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Runner%20de%20seis%20lineas.png",
    "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Runner%20verde.png",
    "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Serpiente%20del%20maiz.png",
    "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Tarantula%20blanca%20y%20negra.png",
    "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Tortuga%20mediterranea.png",
  ],
  []
);
  

  return (
    <div className="relative mx-auto flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-900">
      <h1 className="relative z-20 mx-auto max-w-6xl px-4 text-center text-3xl font-bold text-pretty text-white md:max-w-7xl md:text-5xl lg:text-7xl">
  Mejora la estética de tus terrarios con{" "}
  <span className="relative z-20 inline-block rounded-xl bg-emerald-500/40 px-4 py-1 text-white underline decoration-emerald-400 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
    tarjetas de especie
  </span>{" "}
  elegantes y útiles.
</h1>

<p className="relative font-stretch-90% italic z-20 mx-auto max-w-4xl px-4 py-8 text-center text-base text-neutral-200 md:max-w-5xl md:text-lg lg:max-w-6xl">
  Explora fichas con requisitos ambientales, distribución y conservación para etiquetar tu terrario.
</p>

      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-2">
        <button
          onClick={() => navigate("/types")}
          className="rounded-md cursor-pointer bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black"
        >
          Ver tarjetas
        </button>
      </div>

      <div className="absolute inset-0 z-10 h-full w-full bg-black/60 dark:bg-black/50 pointer-events-none" />

      <ThreeDMarquee className="pointer-events-none absolute inset-0 z-0 h-full w-full" images={images} />
    </div>
  );
}