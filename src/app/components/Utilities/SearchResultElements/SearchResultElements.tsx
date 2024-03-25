import Utilities from "../Utilities"
import styles from './SearchResultElements.module.css'
export default function SearchResultElements(results: any, setShowDetails: any, setProductDetails: any) {
    if (results == null) return <></>
    let response: JSX.Element[] = []
    let keys = Object.keys(results)
    
    for (let result of keys) {
        let product = results[result]
        response.push(
            <div 
            className={styles.productWrapper}
            onClick={() => {
                setProductDetails(product)
                setShowDetails(true)
            }
            
            } key={result}>
                {product!=null? Utilities.SearchResultElement(product["product_title"], product["price"], 0, 0, product["image"]):<></>}
            </div>
        )

    }
    return <div className={`${styles.searchresultelements}`}>{response}</div>
}