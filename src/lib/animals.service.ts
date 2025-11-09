// lib/animals.service.ts
import { supabase } from "./supabaseClient";

export async function getAnimalsByTypeSlug(typeSlug?: string | null) {
  console.log("typeSlug:", typeSlug);

  let query = supabase
    .from("species")
    .select(`
      id,
      scientific_name,
      common_name,
      habitat,
      diet,
      difficulty,
      notes,
      breeding,
      image_url,
      iucn_status,
      temperature_min_c,
      temperature_max_c,
      humidity_min_pct,
      humidity_max_pct,
      lifespan_years_min,
      lifespan_years_max,
      length_adult_cm_min,
      length_adult_cm_max,
      activity,
      type:types ( slug, name ),
      sc:species_countries ( country:countries ( name ) )
    `)
    .order("id", { ascending: true });

  if (typeSlug) {
    const { data: typeData, error: typeError } = await supabase
      .from("types")
      .select("id")
      .eq("slug", typeSlug)
      .single();

    if (typeError || !typeData) {
      console.warn("Type not found:", typeSlug);
      return [];
    }

    query = query.eq("type_id", typeData.id);
  }

  const { data, error } = await query;
  if (error) throw error;

  return (data || []).map((s: any) => ({
    id: s.id,
    scientific_name: s.scientific_name,
    common_name: s.common_name,
    habitat: s.habitat,
    diet: s.diet,
    difficulty: s.difficulty,
    notes: s.notes,
    breeding: s.breeding,
    image_url: s.image_url,
    iucn_status: s.iucn_status ?? null,
    countries: (s.sc || []).map((row: any) => row.country?.name).filter(Boolean),
    env: {
      temperature_min_c: s.temperature_min_c,
      temperature_max_c: s.temperature_max_c,
      humidity_min_pct: s.humidity_min_pct,
      humidity_max_pct: s.humidity_max_pct,
      lifespan_years_min: s.lifespan_years_min,
      lifespan_years_max: s.lifespan_years_max,
      length_adult_cm_min: s.length_adult_cm_min,
      length_adult_cm_max: s.length_adult_cm_max,
      activity: s.activity,
    },
    type: s.type,
  }));
}
