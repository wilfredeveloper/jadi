import Link from "next/link";
import AuthButtonsGroup from "./auth-buttons";
import styles from "./navStyles.module.css";
// import { fetchBasicUserData } from "@/src/app/utils/userUtils";

export default function NavLinks() {
  return (
    <nav className={`flex align-middle justify-around flex-col ${styles.nav}`}>
      <div className={`flex justify-between align-middle flex-col ${styles.links_wrapper}`}>
        <Link
          className="flex text-xs h-2 items-center px-4 font-medium text-gray-300 dark:text-gray-400"
          href="/about"
        >
          ABOUT
          <ArrowIcon />
        </Link>
        <Link
          className="flex text-xs h-2 items-center px-4 font-medium text-gray-300 dark:text-gray-400"
          href="#"
        >
          CONTACT US
          <ArrowIcon />
        </Link>
        <Link
          className="flex text-xs h-2 items-center px-4 font-medium text-gray-300 dark:text-gray-400"
          href="#"
        >
          BLOG
          <ArrowIcon />
        </Link>
        <Link
          className="flex text-xs h-2 items-center px-4 font-medium text-gray-300 dark:text-gray-400"
          href="/dashboard"
        >
          DASHBOARD
          <ArrowIcon />
        </Link>
        <Link
          className="flex text-xs h-2 items-center px-4 font-medium text-gray-300 dark:text-gray-400"
          href="/upload"
        >
          UPLOAD
          <ArrowIcon />
        </Link>
      </div>
      <div>
        <AuthButtonsGroup />
      </div>
    </nav>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="ms-2"
      width="6"
      height="6"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 0.499985V6.99978C9 7.13239 8.94732 7.25956 8.85356 7.35333C8.75979 7.44709 8.63262 7.49977 8.50002 7.49977C8.36741 7.49977 8.24024 7.44709 8.14647 7.35333C8.05271 7.25956 8.00003 7.13239 8.00003 6.99978V1.70682L0.854002 8.85348C0.760184 8.94729 0.63294 9 0.500263 9C0.367585 9 0.240341 8.94729 0.146523 8.85348C0.052706 8.75966 0 8.63241 0 8.49974C0 8.36706 0.052706 8.23982 0.146523 8.146L7.29318 0.999969H2.00022C1.86761 0.999969 1.74044 0.947292 1.64667 0.853527C1.55291 0.759762 1.50023 0.632589 1.50023 0.499985C1.50023 0.36738 1.55291 0.240207 1.64667 0.146442C1.74044 0.0526769 1.86761 0 2.00022 0H8.50002C8.63262 0 8.75979 0.0526769 8.85356 0.146442C8.94732 0.240207 9 0.36738 9 0.499985Z"
        fill="white"
      />
    </svg>
  );
}
