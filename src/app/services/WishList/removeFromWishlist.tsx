import Resources from "@/app/resources/resources";
import axios from "axios";
export default async function removeFromWishlist(productId:string){
    return await axios.post(Resources.config["vibesearchAPIEndpoint"]+"/removefrom-wishlist", {
        "product_id": productId
    })    
}