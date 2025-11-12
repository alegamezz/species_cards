import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDMarquee } from "../components/ui/3d-marquee";
import logo from "../assets/logo-terrarium-text-lime-green.png";

export default function Home() {
  const navigate = useNavigate();

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
      "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Runner%20de%20seis%20lineas.png",
      "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Runner%20verde.png",
      "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Serpiente%20del%20maiz.png",
      "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Tarantula%20blanca%20y%20negra.png",
      "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Rana%20dardo%20verde%20y%20negra.png",
      "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Salamandra%tigre.png",
      "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Dragon%20barbudo.png",
      "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Gecko%20crestado.png",
      "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Gecko%20enano%20azul.png",
      "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Gecko%20enlutado.png",
      "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Gecko%20leopardo.png",
      "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Piton%20real.png",
      "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Rana%20dardo%20amarilla.png",
      "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Rana%20dardo%20azul.png",
      "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Rana%20dardo%20fantasma.png",
      "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Runner%20de%20seis%20lineas.png",
      "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Runner%20verde.png",
      "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Serpiente%20del%20maiz.png",
      "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Tarantula%20blanca%20y%20negra.png",
      "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Rana%20dardo%20verde%20y%20negra.png",
      "https://rtczyqvclglyscrqcjcp.supabase.co/storage/v1/object/public/species_cards/Salamandra%tigre.png",

      
    ],
    []
  );

  return (
    <div className="relative mx-auto flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-900">
      {/* Contenido principal */}
      <div className="relative z-20 px-4 py-8 md:py-12 space-y-6 md:space-y-8 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-6 md:mb-8 animate-fade-in">
          <img
            src={logo}
            alt="Terrarium Logo"
            className="h-36 sm:h-36 md:h-36 lg:h-40 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          />
        </div>

        <h1 className="text-center text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-pretty text-white leading-tight animate-fade-in" style={{ animationDelay: '150ms' }}>
          Mejora la estética de tus terrarios con{" "}
          <span className="relative z-20 inline-block rounded-lg md:rounded-xl bg-emerald-500/40 px-2 py-0.5 md:px-4 md:py-1 text-white underline decoration-emerald-400 decoration-[3px] md:decoration-[6px] underline-offset-[8px] md:underline-offset-[16px] backdrop-blur-sm">
            tarjetas de especie
          </span>{" "}
          elegantes y útiles.
        </h1>

        <p className="relative font-stretch-90% italic text-center text-sm sm:text-base md:text-lg text-neutral-200 max-w-4xl mx-auto px-2 animate-fade-in" style={{ animationDelay: '300ms' }}>
          Explora fichas con requisitos ambientales, distribución y conservación para etiquetar tu terrario.
        </p>

        <div className="relative flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 animate-fade-in" style={{ animationDelay: '450ms' }}>
          <button
            onClick={() => navigate("/types")}
            className="
              rounded-lg md:rounded-xl cursor-pointer 
              bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800
              px-6 sm:px-8 py-2.5 sm:py-3 
              text-sm sm:text-base font-medium text-white 
              transition-all duration-200
              active:scale-95
              touch-manipulation
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900
              shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40
            "
          >
            Ver tarjetas
          </button>
        </div>
      </div>

      {/* Overlay oscuro con degradado */}
      <div 
        className="absolute inset-0 z-10 h-full w-full pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.65) 100%)'
        }}
      />

      {/* Marquee 3D de fondo */}
      <ThreeDMarquee 
        className="pointer-events-none absolute inset-0 z-0 h-full w-full" 
        images={images} 
      />
    </div>
  );
}
