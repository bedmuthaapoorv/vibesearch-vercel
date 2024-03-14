import Resources from "@/app/resources/resources"
export default async function getUserDetails(setUserDetails:any){
    return await Resources.config["supabaseClient"].auth.getUser().then((res: any) => {
        setUserDetails(res)
    })
}