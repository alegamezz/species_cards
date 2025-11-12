import { supabase } from "./supabaseClient";

export async function createRequest(data: {
  name: string;
  speciesName: string;
  scientificName?: string;
  description?: string;
}) {
  const { name, speciesName, scientificName, description } = data;

  const { error, data: inserted } = await supabase
    .from("request")
    .insert([
      {
        name,
        species_name: speciesName,
        scientific_name: scientificName || null,
        description: description || null,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Error inserting request:", error);
    throw error;
  }

  return inserted;
}
