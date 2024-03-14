import Resources from "@/app/resources/resources"

export default async function getAccessToken(setState: any) {
    setState(await Resources.config["supabaseClient"].auth.getSession())
}