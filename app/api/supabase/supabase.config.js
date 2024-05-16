import { createClient } from "@supabase/supabase-js";

const config = {
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL, // production
  supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY,
};

export const supabase = createClient(config?.supabaseUrl, config?.supabaseKey);

export const _supabase = createClient(
  config?.supabaseUrl,
  config?.supabaseKey
);
