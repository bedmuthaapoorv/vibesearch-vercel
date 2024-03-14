import Resources from '@/app/resources/resources'
import styles from './ProductPage.module.css'
import Link from 'next/link'
import services from '@/app/services/services'
import { access } from 'fs'
export default function ProductPage(query: string, image: any, name: String, price: any, url:any, setShowDetails:any, id:any, access_token:any) {
    return (
        <div className={`${styles.productPage}`}>
            <div className={`${styles.productPage__header}`}>
                <img className={`${styles.header__backArrow}`} src={Resources.backArrow.src} onClick={
                    ()=>{
                        setShowDetails(false)
                    }
                }>
                </img>
                <div className={`${styles.header__searchQuery} montserrat fontWeight600`}>
                    {query}
                </div>
            </div>
            <img className={`${styles.productPage__productImages}`} src={image}></img>
            <div className={`${styles.productPage__productDetails}`}>
                <div className={`${styles.productDetail__productName} inter fontWeight600`}>
                    {name}
                </div>
                <div className={`${styles.productDetail__productPrice} inter`}>
                    $ {price}
                </div>
            </div>
            <div className={`${styles.productPage__footer}`}>
                <Link href={url? url: ""} target='_blank'>
                <div className={`${styles.footer__viewProductButton} blackButton`}>
                    View Product Page
                </div>
                </Link>
                <img className={`${styles.productPage__savedProduct}`} src={
                    Resources.savedItems.src
                } onClick={()=>{
                    services.addToWishList(id, access_token)
                }}></img>
            </div>
        </div>
    )
}