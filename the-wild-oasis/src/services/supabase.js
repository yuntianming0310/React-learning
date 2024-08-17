import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gcksxiglwrxjqjabuadt.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdja3N4aWdsd3J4anFqYWJ1YWR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMwMDMzNjUsImV4cCI6MjAzODU3OTM2NX0.50WuJKN10HECk9EjqQrUtb2GTacw7e_AURTccTV-GyY";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
