// components/AnimalCard.tsx
import AnimalProCard from "./AnimalProCard";
// @ts-ignore
import type { Animal } from "../lib/animals.service";

type IucnCode = "EX" | "EW" | "CR" | "EN" | "VU" | "NT" | "LC";

export default function AnimalCard({ animal }: { animal: Animal }) {
  const status = (animal.iucn_status ?? "LC") as IucnCode;

  return (
    <AnimalProCard
      name={animal.common_name || "Desconocido"}
      scientificName={animal.scientific_name}
      image={animal.image_url || "/placeholder.png"}
      habitat={animal.habitat || "N/D"}
      diet={animal.diet || "N/D"}
      status={status}
      countries={animal.countries || []}
      breeding={animal.breeding || undefined}
      location={animal.notes || undefined}
      env={animal.env}
    />
  );
}
