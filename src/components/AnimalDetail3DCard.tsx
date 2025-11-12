"use client";

import { useRef } from "react";
import { toPng } from "html-to-image";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "./ui/3d-card";
import AnimalProCard from "./AnimalProCard";
// @ts-ignore
import type { Animal } from "../lib/animals.service";

interface Props {
  animal: Animal;
  onClose: () => void;
}

export default function AnimalDetail3DCard({ animal, onClose }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!cardRef.current) return;

    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        quality: 1,
        pixelRatio: 2,
        backgroundColor: "#1e293b",
      });

      const link = document.createElement("a");
      link.download = `${animal.common_name || "animal"}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Error al generar la imagen:", err);
    }
  };

  return (
    <CardContainer className="inter-var w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[48rem]">
      <CardBody className="bg-gray-700 relative group/card dark:bg-black dark:border-white/[0.2] border border-black/[0.1] w-full h-auto rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
        <CardItem
          translateZ="50"
          className="text-xl sm:text-2xl font-bold text-neutral-200 dark:text-white text-center w-full"
        >
          {animal.common_name || "Desconocido"}
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-300 font-semibold text-xs sm:text-sm mt-1 dark:text-neutral-300 text-center w-full italic"
        >
          {animal.scientific_name}
        </CardItem>

        {/* 🔽 Solo este bloque será descargado */}
        <CardItem translateZ="120" className="w-full mt-4 sm:mt-6 flex justify-center">
          <div ref={cardRef}> 
            <AnimalProCard
              name={animal.common_name || "Desconocido"}
              scientificName={animal.scientific_name}
              image={animal.image_url || "/placeholder.png"}
              habitat={animal.habitat || "N/D"}
              diet={animal.diet || "N/D"}
              status={animal.iucn_status ?? "LC"}
              countries={animal.countries || []}
              breeding={animal.breeding || undefined}
              location={animal.notes || undefined}
              env={animal.env}
            />
          </div>
        </CardItem>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-6 sm:mt-10">
          <CardItem
            translateZ={20}
            as="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-sm font-medium cursor-pointer dark:text-white bg-slate-800/60 hover:bg-slate-700/80 transition w-full sm:w-auto"
          >
            Volver
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            onClick={handleDownload}
            className="px-5 py-2 rounded-xl dark:bg-white cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition w-full sm:w-auto"
          >
            Descargar Tarjeta
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
