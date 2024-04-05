/**
 * v0 by Vercel.
 * @see https://v0.dev/t/opuAhWs3RF2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "@/components/ui/logo";
import NavLinks from "@/components/ui/nav-links";
import styles from "./Navbar.module.css";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";

export default function Component() {
  const pathname = usePathname();
  const isdashboard = pathname === "/dashboard";
  const isNotesSearchRoute = pathname === "/notes-search";

  return (
    <>
      <div
        className={`${styles.navbar} ${
          isdashboard || isNotesSearchRoute
            ? `${styles.personalised_nav}`
            : "flex justify-center align-middle"
        }`}
        >
        {isdashboard || isNotesSearchRoute ? <p>A note a day keeps the sup away</p> : ""}

        <div className={`${styles.logo_wrapper} flex justify-center`}>
          <Logo className={`${styles.logo}`} width="52" height="72"/>
          <p className={`ms-3 ${styles.platform_name}`}>The Jadi Platform</p>
        </div>

        {isdashboard || isNotesSearchRoute ? (
          <Link className={`${styles.glass_link}`} href={"/dashboard"}>
            dashboard
            <Avatar className="ms-3 w-8 h-8">
              <Image
                alt="use profile photo"
                className="rounded-full object-cover"
                height="42"
                src={"/placeholder-user.svg"}
                style={{
                  aspectRatio: "42/42",
                  objectFit: "cover",
                }}
                width="48"
              />
            </Avatar>
          </Link>
        ) : (
          <NavLinks />
        )}
      </div>
    </>
  );
}
