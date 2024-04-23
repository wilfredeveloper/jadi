/**
 * v0 by Vercel.
 * @see https://v0.dev/t/opuAhWs3RF2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { usePathname } from "next/navigation";
import Logo from "@/components/ui/logo";
import NavLinks from "@/components/ui/nav-links";
import styles from "./Navbar.module.css";

export default function Component() {
  const pathname = usePathname();
  const isdashboard = pathname === "/dashboard";

  return (
    <aside className={`${styles.navbar}`}>
      <div className={`${styles.logo_wrapper}`}>
        <Logo className={`${styles.logo}`} width="32" height="52" />
      </div>

      {!isdashboard && <NavLinks />}
    </aside>
  );
}
