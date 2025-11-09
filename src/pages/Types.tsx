import { useEffect, useState } from "react";
import { getTypes, type SpeciesType } from "../lib/types.service";
import TypesFocus from "../components/TypesFocus";

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
    <div className="min-h-screen text-white p-6">
      <div className="min-h-[20vh] flex items-center justify-center">
        <h1
          className="
            text-center 
            text-5xl md:text-6xl font-bold 
            tracking-tight
            text-white
            bg-clip-text  
            drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]
            leading-tight
          "
        >
          Selecciona una categoría
        </h1>
      </div>

      <TypesFocus items={types} />
    </div>
  );
}
