"use client"
import Resources from "@/app/resources/resources"
import styles from './GetStarted.module.css'
import services from "@/app/services/services"
import { useEffect, useState } from "react"
import Link from "next/link"
import Utilities from "../Utilities/Utilities"

export default function GetStarted() {
    
    let [userDetails, setUserDetails]=useState<any>({})
    let [isMobile, setIsMobile]=useState<any>(false)
    useEffect(() => {
        services.getUserDetails(setUserDetails)
        setIsMobile(services.isMobile())
    }, [])
    return <div className={`${styles.getStarted}`} >
        {/* {JSON.stringify(userDetails)} */}
        <Utilities.VibeLogo></Utilities.VibeLogo>
        <div className={`${styles.getStarted__image}`}>
            <img src={Resources.getStartedImage.src} alt="getStarted image" className={`${styles.image__component}`}></img>
        </div>
        <div className={`${styles.getStarted__buttons}`}>
            <div className={`${styles.getStarted__googleSignIn}`} onClick={async () => await services.googleSignIn()}>
                <img className={`${styles.googleSignIn__googleSignInImage}`} src={Resources.googleSignInButton.src} >
                </img>
            </div>
            <div className={`${styles.getStarted__googleSignIn}`}>
                <Link href={'/components/HomeScreen'}>
                <div className={`${styles.getStarted__guestLoginButton} cabin`}>
                    Guest mode
                </div>
                </Link>
            </div>
        </div>
        <div className={`${styles.getStarted__termsAndConditions} inter500`}>
            <div className={`${styles.termsAndConditions__content}`}>
                By using Vibe, you accept our 
                <Link href={"https://www.hush1one.com/legal/termsofuse"}> <span className="underline">Terms of Service</span></Link> & 
                <Link href={"https://www.hush1one.com/legal/privacypolicy"}> <span className="underline">Privacy Policy</span></Link>
            </div>
        </div>
    </div>
}