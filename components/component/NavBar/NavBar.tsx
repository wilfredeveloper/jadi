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

export default function Component() {
  const pathname = usePathname();
  const isdashboard = pathname === "/dashboard";

  return (
    <>
      <div
        className={`${styles.navbar} py-14 ${
          isdashboard ? "flex justify-center align-middle" : "flex-col"
        }`}
      >
        <div>
          <Logo />
          {isdashboard ? (
            <p className={`${styles.logo_tagline}`}>
              A note a day keeps the sup away
            </p>
          ) : (
            <NavLinks />
          )}
        </div>
      </div>
    </>
  );
}
