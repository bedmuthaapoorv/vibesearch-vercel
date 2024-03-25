
import config from '@/app/resources/config';
import Resources from '@/app/resources/resources';


export default async function googleSignIn(){
    console.log("inside google signin")
    const supabase = config["supabaseClient"];
    await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'https://vibesearch-vercel.vercel.app/components/HomeScreen',
          queryParams: {
            access_type: 'offline',
            prompt:'select_account',
          }
        }
      }).then(()=>{
        console.log("logged in")
      })
}