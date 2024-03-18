"use client"
import Utilities from "../Utilities"
import Resources from "@/app/resources/resources"
import { motion } from 'framer-motion'
import styles from './LeftMenu.module.css'
import { useEffect, useState } from "react"
import services from "@/app/services/services"
import Link from "next/link"
export default function LeftMenu(openMenu: boolean) {

    let [userDetails, setUserDetails] = useState<any>({
        "data": {
            "user": null
        }
    })
    useEffect(() => {
        if (userDetails["data"]["user"] == null) {
            services.getUserDetails(setUserDetails)
        }
    }, [])
    //console.log(userDetails)


    return (
        <motion.div initial={{ x: '-140vw' }} animate={{ x: openMenu? 0 :-400, y: -555 }}>
            <div className={`${styles.menu}`}>
                <div className={`${styles.menu__section}`}>
                    <Link href={'SearchResults?query=wishlist'}>{Utilities.MenuSectionElement(Resources.savedItems.src, 'Saved Items', 'View')}</Link>
                </div>
                <div className={`${styles.menu__historyContainer}`}>
                    {/* <div className={`${styles.menu__section}`}>
                    <div className={`${styles.section__title} montserrat fontWeight600`}>Connect</div>
                    {Utilities.MenuSectionElement(Resources.savedItems.src, 'Saved Items', 'View')}
                    {Utilities.MenuSectionElement(Resources.savedItems.src, 'Saved Items', 'View')}
                    {Utilities.MenuSectionElement(Resources.savedItems.src, 'Saved Items', 'View')}
                </div>
                <div className={`${styles.menu__section}`}>
                    <div className={`${styles.section__title} montserrat fontWeight600`}>Yesterday</div>
                    {Utilities.HistoryElement('DC comic dress')}
                    {Utilities.HistoryElement('DC comic dress')}
                    {Utilities.HistoryElement('DC comic dress')}
                </div>
                <div className={`${styles.menu__section}`}>
                    <div className={`${styles.section__title} montserrat fontWeight600`}>Yesterday</div>
                    {Utilities.HistoryElement('DC comic dress')}
                    {Utilities.HistoryElement('DC comic dress')}
                    {Utilities.HistoryElement('DC comic dress')}
                </div>
                <div className={`${styles.menu__section}`}>
                    <div className={`${styles.section__title} montserrat fontWeight600`}>Yesterday</div>
                    {Utilities.HistoryElement('DC comic dress')}
                    {Utilities.HistoryElement('DC comic dress')}
                    {Utilities.HistoryElement('DC comic dress')}
                </div> */}
                </div>
                <div className={`${styles.menu__accountContainer}`}>
                    <div className={`${styles.menu__account}`}>
                        <img className={`${styles.account__image}`} src={userDetails["data"]["user"] ? userDetails["data"]["user"]["user_metadata"]["picture"] : Resources.savedItems.src}></img>
                        <div className={`${styles.account__name}`}>{userDetails["data"]["user"] ? userDetails["data"]["user"]["user_metadata"]["full_name"] : "Guest Mode"}</div>
                        <div className={`${styles.account__logout}`}>{!userDetails["data"]["user"] ? <Link href={"/components/GetStarted"}>Log in</Link> : <Link href={'/components/HomeScreen'}><div onClick={() => services.logOut()}>Log Out</div></Link>}</div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}