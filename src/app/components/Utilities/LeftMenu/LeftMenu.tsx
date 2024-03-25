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

    console.log(openMenu)
    return (
        <motion.div initial={{x: -308}} animate={{ x: openMenu? 0: -308, y: 0 }}>
            <div className={`${styles.menu}`}>
                <div className={`${styles.menu__historyContainer}`}>
                    
                </div>
                <div className={`${styles.menu__accountContainer}`}>
                    <div className={`${styles.menu__account}`}>
                        <img className={`${styles.account__image}`} src={userDetails["data"]["user"] ? userDetails["data"]["user"]["user_metadata"]["picture"] : Resources.savedItems.src}></img>
                        <div className={`${styles.account__name}`}>{userDetails["data"]["user"] ? userDetails["data"]["user"]["user_metadata"]["full_name"] : "Guest Mode"}</div>
                        <div className={`${styles.account__logout}`}>{!userDetails["data"]["user"] ? <Link href={"/components/GetStarted"}>Log in</Link> : <Link href={'/components/GetStarted'}><div onClick={() => services.logOut()}>Log Out</div></Link>}</div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}