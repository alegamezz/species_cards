export type Animal = {
    id: string;
    common_name: string;
    scientific_name?: string;
    iucn_status?: string;
    min_temp?: number;
    max_temp?: number;
    min_humidity?: number;
    max_humidity?: number;
    description?: string;
    images?: string[];
    created_at?: string;
    updated_at?: string;
  };
  