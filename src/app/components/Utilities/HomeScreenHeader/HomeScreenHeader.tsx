"use client"
import styles from './HomeScreenHeader.module.css'
import Utilities from '../Utilities';
import Resources from '@/app/resources/resources';
import Link from 'next/link';
export default function HomeScreenHeader(setOpenMenu: any) {

    return (
        <div className={`${styles.homescreen__header}`}>
            <img className={`${styles.header__menuSandwichIcon}`} src={Resources.menuSandwichIcon.src} onClick={
                () => setOpenMenu(true)
            }></img>
            <img className={`${styles.header__newSearch}`} src={Resources.newSearchIcon.src}></img>
        </div>
    )
}