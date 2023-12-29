import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://qbafkzgeavurwjhdzmnl.supabase.co", import.meta.env.VITE_SUPABASE_KEY);

export default supabase