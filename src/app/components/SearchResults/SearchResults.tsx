"use client"
import Utilities from '../Utilities/Utilities'
import styles from './SearchResults.module.css'
import Components from '@/app/Components'

import { useEffect, useState } from 'react'
import services from '@/app/services/services'
import { useSearchParams } from 'next/navigation'



export default function SearchResults() {

    let [searchResults, setSearchResults] = useState<any>(null);
    let [currentPage, setCurrentPage] = useState(0)
    let [userDetails, setUserDetails] = useState({})
    let [accessData, setAccessData] = useState<any>(null)
    
    let [openMenu, setOpenMenu] = useState<boolean>(false);
    let [showDetails, setShowDetails]=useState<boolean>(false);
    let [productDetails, setProductDetails]=useState<any>(false);

    let searchParams = useSearchParams()
    let query = searchParams.get('query')
    
    // const secondQuery:any = router.query.secondQuery;
    // //let secondQuery=searchParams.get('secondQuery')
    let [secondQuery, setSecondQuery]=useState<any>("")
    useEffect(() => {
        services.getAccessToken(setAccessData);
        setSecondQuery(localStorage.getItem('image-file'))
        //localStorage.removeItem('image-file')
    }, []); // Empty dependency array means this effect runs once on mount.

    //console.log("coole: "+secondQuery)
    // Call vibeIt when temp, currentPage, or accessData changes
    useEffect(() => {
        if(accessData && accessData["data"] && accessData["data"]["session"]) { // Make sure accessData is not null before calling vibeIt
            if(query=='wishlist'){
                services.getWishlist(accessData["data"]["session"]["access_token"], setSearchResults)
            }else{
                services.vibeIt(query, secondQuery, `${currentPage}`, "10", setSearchResults, accessData["data"]["session"]["access_token"]);
            }
        }
    }, [query, currentPage, accessData]); // This effect depends on temp, currentPage, and accessData.

    console.log(productDetails)    
    return (
        <div className={`${styles.SearchResults__container}`} onClick={
            () => {
                if (openMenu) setOpenMenu(false);
            }
        }>
            <div className={`${styles.SearchResults}`}>
                {Utilities.HomeScreenHeader(setOpenMenu)}
                <div className={`${styles.SearchResults__wrapper}`}>
                    {Utilities.SearchResultsElements(searchResults, setShowDetails, setProductDetails)}
                </div>
                <Utilities.SearchBox></Utilities.SearchBox>
            </div>
            <div>
                {accessData && accessData["data"] && accessData["data"]["session"]? Components.ProductPage(query?query:"", productDetails["image"], productDetails["product_title"], productDetails["price"], productDetails["product_url"], setShowDetails, productDetails["id"], accessData["data"]["session"]["access_token"], showDetails):""}
            </div>
            {Utilities.LeftMenu(openMenu)}
        </div>
    )
}