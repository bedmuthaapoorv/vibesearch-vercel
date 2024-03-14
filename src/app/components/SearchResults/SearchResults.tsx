"use client"
import Resources from '@/app/resources/resources'
import Utilities from '../Utilities/Utilities'
import styles from './SearchResults.module.css'
import Components from '@/app/Components'
// import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import services from '@/app/services/services'
import { useSearchParams } from 'next/navigation'

export default function SearchResults() {

    let [searchResults, setSearchResults] = useState<any>(null);
    let [currentPage, setCurrentPage] = useState(0)
    let [userDetails, setUserDetails] = useState({})
    let [accessData, setAccessData] = useState<any>(null)
    let [query, setQuery] = useState<string | null>("");
    let [openMenu, setOpenMenu] = useState<boolean>(false);
    let [showDetails, setShowDetails]=useState<boolean>(false);
    let [productDetails, setProductDetails]=useState<any>(false);

    let searchParams = useSearchParams()
    let temp = searchParams.get('query')
    useEffect(() => {
        services.getAccessToken(setAccessData);
    }, []); // Empty dependency array means this effect runs once on mount.

    // Call vibeIt when temp, currentPage, or accessData changes
    useEffect(() => {
        if(accessData) { // Make sure accessData is not null before calling vibeIt
            if(temp=='wishlist'){
                services.getWishlist(accessData["data"]["session"]["access_token"], setSearchResults)
            }else{
                services.vibeIt(temp, "", `${currentPage}`, "10", setSearchResults, accessData["data"]["session"]["access_token"]);
            }
        }
    }, [temp, currentPage, accessData]); // This effect depends on temp, currentPage, and accessData.

    // console.log(productDetails)    
    return (
        <div className={`${styles.SearchResults__container}`}>
            <div className={`${styles.SearchResults}`}
                onClick={
                    () => {
                        if (openMenu) setOpenMenu(false);
                    }
                }
            >
                {Utilities.HomeScreenHeader(setOpenMenu)}
                <div className={`${styles.SearchResults__wrapper}`}>
                    {Utilities.SearchResultsElements(searchResults, setShowDetails, setProductDetails)}
                </div>
                <Utilities.SearchBox></Utilities.SearchBox>
            </div>
            <div style={{
                display: showDetails? 'inherit': 'none'
            }}>
                {accessData? Components.ProductPage(temp?temp:"", productDetails["image"], productDetails["product_title"], productDetails["price"], productDetails["product_url"], setShowDetails, productDetails["id"], accessData["data"]["session"]["access_token"]):""}
            </div>
            {Utilities.LeftMenu(openMenu)}
        </div>
    )
}