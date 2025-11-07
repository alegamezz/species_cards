// components/AnimalCard.tsx
import AnimalProCard from "./AnimalProCard";

interface Animal {
  id: number;
  scientific_name: string;
  common_name: string | null;
  habitat: string | null;
  diet: string | null;
  difficulty: number;
  notes: string | null;
  image_url: string | null;
  countries?: string[]; // ← nuevo
}

export default function AnimalCard({ animal }: { animal: Animal }) {
  return (
    <AnimalProCard
      name={animal.common_name || "Desconocido"}
      scientificName={animal.scientific_name}
      image={animal.image_url || "/placeholder.png"}
      habitat={animal.habitat || "N/D"}
      diet={animal.diet || "N/D"}
      status="LC"
      countries={animal.countries || []}
    />
  );
}
