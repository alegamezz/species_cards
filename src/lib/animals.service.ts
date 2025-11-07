// lib/animals.service.ts
import { supabase } from "./supabaseClient";

export async function getAnimals() {
  const { data, error } = await supabase
    .from("species")
    .select(`
      id,
      scientific_name,
      common_name,
      habitat,
      diet,
      difficulty,
      notes,
      image_url,
      sc:species_countries (
        country:countries ( name )
      )
    `)
    .order("id", { ascending: true });

  if (error) throw error;

  const normalized = (data || []).map((s: any) => ({
    ...s,
    countries: (s.sc || []).map((row: any) => row.country?.name).filter(Boolean),
  }));

  console.log("Normalized Animals:", normalized);
  return normalized;
}
