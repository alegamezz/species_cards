import { useEffect, useState } from "react";
import { getAnimals } from "../lib/animals.service";
import AnimalCard from "../components/AnimalCard";

interface Animal {
    id: number;
    scientific_name: string;
    common_name: string | null;
    habitat: string | null;
    diet: string | null;
    difficulty: number;
    notes: string | null;
    image_url: string | null; // 👈 nuevo campo
  }

export default function Home() {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAnimals() {
      const data = await getAnimals();
      setAnimals(data || []);
      setLoading(false);
    }
    loadAnimals();
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-white">Cargando...</div>;
  }

  return (
    <div className="min-h-screen bg-green-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Terrarium Cards</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {animals.map((a) => (
        <AnimalCard key={a.id} animal={a} />
    ))}
    </div>
    </div>
  );
}
