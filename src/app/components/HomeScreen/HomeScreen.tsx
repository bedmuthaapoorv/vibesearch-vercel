"use client"

import styles from "./HomeScreen.module.css"
import Components from "@/app/Components";
import Resources from "@/app/resources/resources";
import { useEffect, useState } from 'react';
import services from '@/app/services/services';
import Utilities from '../Utilities/Utilities';

export default function HomeScreen() {
    let [openMenu, setOpenMenu]=useState(false);
    let [userDetails, setUserDetails]=useState<any>({})
    let [accessData, setAccessData]=useState<any>({})
    useEffect(()=>{
        services.getUserDetails(setUserDetails)
        services.getAccessToken(setAccessData)
    }, [])
    console.log(accessData)
    return <div className={`${styles.container}`}>
        {/* {JSON.stringify(userDetails)} */}
        
        <div className={`${styles.homescreen}`} onClick={
            ()=>{
                if(openMenu) setOpenMenu(false);
            }
        }>
            {Utilities.HomeScreenHeader(setOpenMenu)}
            <div className={`${styles.homescreen__content}`}>
                <div className={`${styles.content__smallText} inter fontWeight500`}>
                    Your personalized assistant for finding just the right vibe
                </div>
                <div className={`${styles.content__mediumText} inter fontWeight500`}>
                    Start here for some quick inspiration
                </div>
                <div className={`${styles.content__suggestionBoxes}`}>
                    <div className={`${styles.suggestionBoxes__row}`}>
                        {Utilities.Box(Resources.boxImage, 'Suggest me some good nike white colour shoes')}
                        {Utilities.Box(Resources.boxImage, 'Suggest me some good nike white colour shoes')}
                    </div>
                    <div className={`${styles.suggestionBoxes__row}`}>
                        {Utilities.Box(Resources.boxImage, 'Suggest me some good nike white colour shoes')}
                        {Utilities.Box(Resources.boxImage, 'Suggest me some good nike white colour shoes')}
                    </div>
                </div>
            </div>
            <Utilities.SearchBox></Utilities.SearchBox>
        </div>
        {Utilities.LeftMenu(openMenu)}
    </div>
}