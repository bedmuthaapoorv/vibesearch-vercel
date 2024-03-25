"use client"

import styles from "./HomeScreen.module.css"
import Components from "@/app/Components";
import Resources from "@/app/resources/resources";
import { useEffect, useState } from 'react';
import services from '@/app/services/services';
import Utilities from '../Utilities/Utilities';

export default function HomeScreen() {
    let [openMenu, setOpenMenu] = useState(false);
    let [userDetails, setUserDetails] = useState<any>({})
    let [accessData, setAccessData] = useState<any>({})
    useEffect(() => {
        services.getUserDetails(setUserDetails)
        services.getAccessToken(setAccessData)
    }, [])
    console.log(accessData)
    return <div className={`${styles.homescreen__parent}`}>
        {Utilities.LeftMenu(openMenu)}
        <div className={`${styles.container}`}>
            {/* {JSON.stringify(userDetails)} */}
            {Utilities.HomeScreenHeader(setOpenMenu)}
            <div className={styles.homescreen} onClick={
                () => {
                    if (openMenu) setOpenMenu(false);
                }
            }>
                <div className={`${styles.homescreen__content}`}>
                    <Utilities.VibeLogo></Utilities.VibeLogo>
                    <div className={`${styles.content__mediumText} montserrat fontWeight800`}>
                        Find Products You Love!
                    </div>
                    <div className={`${styles.content__smallText} cabin`}>
                        Upload a photo or type in the vibe you're looking for
                    </div>
                </div>
                <Utilities.SearchBox></Utilities.SearchBox>
            </div>
            <div className={`${styles.container__padding}`}>

            </div>
        </div>
    </div>
}