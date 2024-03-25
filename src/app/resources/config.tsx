import { createClient } from '@supabase/supabase-js';

// tkkqwufsogvjcgwhcgci
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRra3F3dWZzb2d2amNnd2hjZ2NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3OTE1OTIsImV4cCI6MjAyNTM2NzU5Mn0.z1FWn5rBmiIXmkN2eDq0zcpaB5GxyxGKIDJR_u8DnRg
// https://eaeokyefsdfamwqqzfko.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhZW9reWVmc2RmYW13cXF6ZmtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzNzExODYsImV4cCI6MjAyNDk0NzE4Nn0.iqWMB0debYgPRX5PjtJuIfy5ImxZfC9ol7A4EPFXmFU
const config:any = {
    "SUPABASE_URL" : "https://eaeokyefsdfamwqqzfko.supabase.co",
    "SUPABASE_ANON_KEY" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhZW9reWVmc2RmYW13cXF6ZmtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzNzExODYsImV4cCI6MjAyNDk0NzE4Nn0.iqWMB0debYgPRX5PjtJuIfy5ImxZfC9ol7A4EPFXmFU",
    "supabaseClient": null,
    "vibesearchAPIEndpoint":"https://hushh-vs-api.hf.space"
}

function createSupabaseClient(){
    const supabase = createClient(config.SUPABASE_URL, config.SUPABASE_ANON_KEY);
    // console.log(await supabase.auth.getSession()
    return supabase
}

config["supabaseClient"]=createSupabaseClient()

export default config;