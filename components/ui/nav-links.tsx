import Link from "next/link";
import AuthButtonsGroup from "./auth-buttons";
import styles from "./navStyles.module.css";
import { Separator } from "./separator";
import ShinyButton from "./shiny-button";

interface NavLinksProps {
  isUserAuthenticated: boolean;
}

export default function NavLinks({ isUserAuthenticated }: NavLinksProps) {
  return (
    <nav className={`flex align-middle justify-around flex-col ${styles.nav}`}>
      <div
        className={`flex justify-between align-middle flex-col ${styles.links_wrapper}`}
      >
        <Link
          className="flex text-xs h-2 items-center px-4 font-medium text-gray-950 dark:text-gray-400"
          href="#"
        >
          <BlogIcon />
          BLOG
        </Link>
        <Link
          className="flex text-xs h-2 items-center px-4 font-medium text-gray-950 dark:text-gray-400"
          href="/about"
        >
          <HomeIcon />
          ABOUT
        </Link>
        <Link
          className="flex text-xs h-2 items-center px-4 font-medium text-gray-950 dark:text-gray-400"
          href="#"
        >
          <ContactIcon />
          CONTACT US
        </Link>
        <Separator className="dark:bg-gray-400 opacity-20" />
        <Link
          className="flex text-xs h-2 items-center px-4 font-medium text-gray-950 dark:text-gray-400"
          href="/upload"
        >
          <UploadIcon />
          UPLOAD
        </Link>
        <Link
          className="flex text-xs h-2 px-4 items-center font-medium text-gray-950 dark:text-gray-400"
          href="/dashboard"
        >
          {/* <ShinyButton className={`${styles.shiny_button}`}>
            DASHBOARD
          </ShinyButton> */}
          <DashboardIcon />
          DASHBOARD
        </Link>
      </div>
      <div>
        <AuthButtonsGroup isUserAuthenticated={isUserAuthenticated}/>
      </div>
    </nav>
  );
}

function HomeIcon(props: any) {
  return (
    <svg
      className={`me-2 opacity-70`}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z"></path>
    </svg>
  );
}

function BlogIcon(props: any) {
  return (
    <svg
      className={`me-2 opacity-70`}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M240,80V200a8,8,0,0,1-8,8H160a24,24,0,0,0-24,23.94,7.9,7.9,0,0,1-5.12,7.55A8,8,0,0,1,120,232a24,24,0,0,0-24-24H24a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H88a32,32,0,0,1,32,32v63.73a8.17,8.17,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V104a32,32,0,0,1,32-32h64A8,8,0,0,1,240,80ZM88.81,56H89a47.92,47.92,0,0,1,36,17.4,4,4,0,0,0,6.08,0A47.92,47.92,0,0,1,167,56h.19a4,4,0,0,0,3.54-5.84,48,48,0,0,0-85.46,0A4,4,0,0,0,88.81,56Z"></path>
    </svg>
  );
}

function ContactIcon(props: any) {
  return (
    <svg
      className={`me-2 opacity-70`}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M184,56V200a24,24,0,0,1-24,24H96a24,24,0,0,1-24-24V56A24,24,0,0,1,96,32h64A24,24,0,0,1,184,56Zm24,24a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,208,80Zm32,16a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V104A8,8,0,0,0,240,96ZM48,80a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,48,80ZM16,96a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V104A8,8,0,0,0,16,96Z"></path>
    </svg>
  );
}

function UploadIcon(props: any) {
  return (
    <svg
      className={`me-2 opacity-70`}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M247.93,124.52C246.11,77.54,207.07,40,160.06,40A88.1,88.1,0,0,0,81.29,88.67h0A87.48,87.48,0,0,0,72,127.73,8.18,8.18,0,0,1,64.57,136,8,8,0,0,1,56,128a103.66,103.66,0,0,1,5.34-32.92,4,4,0,0,0-4.75-5.18A64.09,64.09,0,0,0,8,152c0,35.19,29.75,64,65,64H160A88.09,88.09,0,0,0,247.93,124.52Zm-50.27,9.14a8,8,0,0,1-11.32,0L168,115.31V176a8,8,0,0,1-16,0V115.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,197.66,133.66Z"></path>
    </svg>
  );
}

function DashboardIcon(props: any) {
  return (
    <svg
      className={`me-2 opacity-70`}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M172,120a44,44,0,1,1-44-44A44.05,44.05,0,0,1,172,120Zm60,8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88.09,88.09,0,0,0-91.47-87.93C77.43,41.89,39.87,81.12,40,128.25a87.65,87.65,0,0,0,22.24,58.16A79.71,79.71,0,0,1,84,165.1a4,4,0,0,1,4.83.32,59.83,59.83,0,0,0,78.28,0,4,4,0,0,1,4.83-.32,79.71,79.71,0,0,1,21.79,21.31A87.62,87.62,0,0,0,216,128Z"></path>
    </svg>
  );
}