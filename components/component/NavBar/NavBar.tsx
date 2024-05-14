/**
 * v0 by Vercel.
 * @see https://v0.dev/t/opuAhWs3RF2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Logo from "@/components/ui/logo";
import NavLinks from "@/components/ui/nav-links";
import styles from "./Navbar.module.css";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Component() {
  const isAuthenticated = getKindeServerSession().isAuthenticated();

  return (
    <aside className={`${styles.navbar} full-width dark:bg-black`}>
      <div className={`${styles.logo_wrapper}`}>
        <Logo className={`${styles.logo}`} width="32" height="52" />
      </div>

      <button className={`${styles.toggle_btn}`}></button>

      {(await isAuthenticated) ? (
        <NavLinks isUserAuthenticated={true} />
      ) : (
        <NavLinks isUserAuthenticated={false} />
      )}
    </aside>
  );
}

function ChevronIconRight(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#fff"
      className={`${styles.toggle_icon}`}
      viewBox="0 0 256 256"
    >
      <path d="M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM190.23,190.23a88,88,0,1,1,0-124.46A88.11,88.11,0,0,1,190.23,190.23Zm-64.57-67.89a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L108.69,128,82.34,101.66A8,8,0,0,1,93.66,90.34Zm56,0a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L164.69,128l-26.35-26.34a8,8,0,0,1,11.32-11.32Z"></path>
    </svg>
  );
}

function ChevronIconLeft(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#fff"
      className={`${styles.toggle_icon}`}
      viewBox="0 0 256 256"
    >
      <path d="M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM190.23,190.23a88,88,0,1,1,0-124.46A88.11,88.11,0,0,1,190.23,190.23Zm-16.57-88.57L147.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32Zm-56,0L91.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32Z"></path>
    </svg>
  );
}

function DotsIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#fff"
      className={`${styles.toggle_icon}`}
      viewBox="0 0 256 256"
    >
      <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>
    </svg>
  );
}
