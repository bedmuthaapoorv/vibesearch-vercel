import styles from './SearchResultElement.module.css'

export default function SearchResultElement(name: any, price: any, ratings: any, noOfReviews: any, image: any) {
    return (
        <div className={`${styles.searchResultElement}`}>
            <img className={`${styles.searchResultElement__productImage}`} src={image}>
            </img>
            <div className={`${styles.searchResultElement__productInfo}`}>
                <div className={`${styles.productInfo__name}`}>
                    {name}
                </div>
                <div className={`${styles.productInfo__price}`}>
                    $ {price}
                </div>
                <div className={`${styles.productInfo__review}`}>
                    <div className={`${styles.review__ratings}`}>
                        &#11088; {ratings}
                    </div>
                    <div className={`${styles.review__totalReviews}`}>
                        {noOfReviews} Reviews
                    </div>
                </div>
            </div>
        </div>
    )
}