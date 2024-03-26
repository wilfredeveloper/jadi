import Image from "next/image";
import styles from "./homepage.module.css"
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import { db } from "@/src/db";
import { UserProfiles } from "../db/schema";

export default async function Home() {
  const result = await db.select().from(UserProfiles);


  return (
    <main className={`${styles.main_content}`}>
      <section className={`${styles.section_one} ${styles.section} flex flex-col items-center justify-center text-white`}>
        <h1 className={`${styles.hero_title}`}>Ditch the Scattered notes </h1>
        <p className={`${styles.hero_desc}`}>Stop wasting time searching for notes and start studying smarter with Jadi</p>

        <div className={`flex align-middle justify-evenly ${styles.btn_group}`}>
          <LoginLink className={`${styles.btn_link}`}>
            <Button variant="outline" size="lg"> Sign in </Button>
          </LoginLink>

          <RegisterLink postLoginRedirectURL="/onboarding" className={`${styles.btn_link}`}>
            <Button variant="default" size="lg"> Create Account 
                <svg className={`${styles.btn_icon}`} width="12" height="10" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.7075 10.7081L14.7075 19.7081C14.5199 19.8957 14.2654 20.0011 14 20.0011C13.7346 20.0011 13.4801 19.8957 13.2925 19.7081C13.1049 19.5204 12.9994 19.2659 12.9994 19.0006C12.9994 18.7352 13.1049 18.4807 13.2925 18.2931L20.5863 11.0006H1C0.734784 11.0006 0.48043 10.8952 0.292893 10.7077C0.105357 10.5201 0 10.2658 0 10.0006C0 9.73534 0.105357 9.48099 0.292893 9.29345C0.48043 9.10591 0.734784 9.00056 1 9.00056H20.5863L13.2925 1.70806C13.1049 1.52042 12.9994 1.26592 12.9994 1.00056C12.9994 0.735192 13.1049 0.480697 13.2925 0.293056C13.4801 0.105415 13.7346 0 14 0C14.2654 0 14.5199 0.105415 14.7075 0.293056L23.7075 9.29306C23.8005 9.38593 23.8742 9.49622 23.9246 9.61762C23.9749 9.73901 24.0008 9.86914 24.0008 10.0006C24.0008 10.132 23.9749 10.2621 23.9246 10.3835C23.8742 10.5049 23.8005 10.6152 23.7075 10.7081Z" fill="black"/>
              </svg>
            </Button>
          </RegisterLink>
        </div>
      </section>
    </main>
  );
}
