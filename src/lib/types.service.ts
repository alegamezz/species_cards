import { supabase } from "./supabaseClient";

export type SpeciesType = {
  id: number;
  slug: string;
  name: string;
  image_url?: string | null; // opcional si quieres mini-banner por tipo
};

export async function getTypes(): Promise<SpeciesType[]> {
  const { data, error } = await supabase
    .from("types")
    .select("id, slug, name, image_url")
    .order("name", { ascending: true });
  if (error) throw error;
  return (data || []) as SpeciesType[];
}
