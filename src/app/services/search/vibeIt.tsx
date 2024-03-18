import Resources from "@/app/resources/resources";
import axios from "axios";
export default async function vibeIt(mainQuery: string | null, secondaryQuery: string | null, currentPage: string, result_count: string, setState: any, access_token: string|null) {
    let data={
        "query": {
            "mainquery": mainQuery,
            "secondaryquery": secondaryQuery
        },
        "current_page": currentPage,
        "result_count": result_count
    }
    let header={
        headers: {
            "apitoken": access_token
        }
    }
    // console.log(header)
    // console.log(data)
    try{
        let results=await axios.post(Resources.config["vibesearchAPIEndpoint"] + "/vibe-it", data, header)
        setState(results["data"])
        //console.log(results["data"])
    }catch(e:any){
        console.log(e.message)
    }
    
}