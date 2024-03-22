"use client"
import Resources from "@/app/resources/resources"
import styles from './GetStarted.module.css'
import services from "@/app/services/services"
import { useEffect, useState } from "react"
import Link from "next/link"


export default function GetStarted() {
    
    let [userDetails, setUserDetails]=useState({})
    useEffect(() => {
        services.getUserDetails(setUserDetails)
        services.isMobile()
    }, [])
    return <div className={`${styles.getStarted}`}>
        {/* {JSON.stringify(userDetails)} */}
        <div className={`${styles.getStarted__title} vibeTitle`}>
            VIBE
        </div>
        <div className={`${styles.getStarted__image}`}>
            <img src={Resources.getStartedImage.src} alt="getStarted image"></img>
        </div>
        <div className={`${styles.getStarted__googleSignIn}`} onClick={async () => await services.googleSignIn()}>
            <img className={`${styles.googleSignIn__googleSignInImage}`} src={Resources.googleSignInButton.src} >
            </img>
        </div>
        <div className={`${styles.getStarted__googleSignIn}`}>
            <Link href={'/components/HomeScreen'}>
            <div className={`${styles.getStarted__guestLoginButton} inter500 fontSize14 button ${styles.getStartedbuttons}`}>
                Login as Guest
            </div>
            </Link>
        </div>
        <div className={`${styles.getStarted__buttonsFlex}`}>
            <Link href={'/components/LogIn'}>
                <div className={`${styles.getStarted__loginButton} inter500 fontSize14 button ${styles.getStartedbuttons}`}>
                    Login
                </div>
            </Link>
            <Link href={'/components/SignUp'}>
                <div className={`${styles.getStarted__getStartedButton} inter500 fontSize14 button ${styles.getStartedbuttons}`}>
                    Sign Up
                </div>
            </Link>
        </div>
        <div className={`${styles.getStarted__termsAndConditions} inter500`}>
            <div className={`${styles.termsAndConditions__content}`}>
                By using Vibe, you accept our Terms of Service & Privacy Policy
            </div>
        </div>
    </div>
}