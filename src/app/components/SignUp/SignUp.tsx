"use client";
import services from "@/app/services/services";
import styles from "./SignUp.module.css";
import Components from "@/app/Components";
import Utilities from "../Utilities/Utilities";
import { Carousel } from "antd";
import Link from "next/link";
import { useState } from "react";
import backIconLogo from "../../resources/back-icon.png";

export default function SignUp() {
  let [cred, setCred] = useState({
    Name: "",
    Email: "",
    Password: "",
  });
  return (
    <div className={`${styles.signup}`}>
      <div className={`${styles.signup__logo} vibeTitle`}>VIBE</div>
      <Link href={"/components/GetStarted"} className={`${styles.Signup__back__image}`}>
        <img src={backIconLogo.src} alt="Back Icon" />
      </Link>
      <div className={`${styles.signup__form}`}>
        <div className={`${styles.signup__title}`}>
          <div className={`${styles.title__content} montserrat fontWeight600`}>
            Create an Account
          </div>
        </div>
        <Carousel
          arrows={true}
          dots={true}
          style={{ maxWidth: "80vw", height: "30vh" }}
        >
          <div>
            {Utilities.formElement({
              label: "Name",
              placeholder: "Your name here",
              isPassword: false,
              state: cred,
              setState: setCred,
            })}
            {Utilities.formElement({
              label: "Email",
              placeholder: "name@domain.com",
              isPassword: false,
              state: cred,
              setState: setCred,
            })}
          </div>
          <div>
            {Utilities.formElement({
              label: "Password",
              isPassword: true,
              state: cred,
              setState: setCred,
            })}
            {Utilities.formElement({
              label: "Confirm Password",
              isPassword: true,
              state: cred,
              setState: setCred,
            })}
          </div>
        </Carousel>
      </div>
      <Link href={"/Components/Verification"}>
        <div
          className={`${styles.signup__signup} inter500 button`}
          onClick={() => {
            services.passwordSignIn(cred["Email"], cred["Password"]);
          }}
        >
          Next
        </div>
      </Link>
      <div className={`${styles.signup__login} inter500`}>
        Don't have an account? <Link href="/Components/LogIn">Log In</Link>
      </div>
    </div>
  );
}
