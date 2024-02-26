/**
 * v0 by Vercel.
 * @see https://v0.dev/t/opuAhWs3RF2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
'use client'
 
import { usePathname } from 'next/navigation'
import Link from "next/link"
import styles from "./Navbar.module.css"
import { Button } from "@/components/ui/button"
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs' 

export default function Component() {

  const pathname = usePathname()

  const isdashboard = pathname === "/dashboard"
  
  return (
    <>
    <div className={`${styles.navbar} py-14 ${isdashboard ? "flex justify-center align-middle" : "flex-col"}`}>
      <Link className="flex h-10 text-slate-300 items-center justify-center text-2xl tracking-widest" href="#">
        JADI
      </Link>
      
      {
        isdashboard ? (
          <LogoutLink>
      <Button className={`${styles.auth_button}`} variant="default" size={"sm"}>Logout
      <svg className={`${styles.btn_icon}`} width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.82894 6.38589L0.996255 11.8402C0.942063 11.8908 0.877728 11.931 0.806924 11.9585C0.736119 11.9859 0.660231 12 0.583592 12C0.506954 12 0.431066 11.9859 0.360261 11.9585C0.289456 11.931 0.225122 11.8908 0.17093 11.8402C0.116738 11.7895 0.0737513 11.7293 0.0444231 11.6631C0.0150948 11.5969 0 11.5259 0 11.4543C0 11.3826 0.0150948 11.3116 0.0444231 11.2454C0.0737513 11.1792 0.116738 11.1191 0.17093 11.0684L5.59168 6L0.17093 0.93162C0.0614851 0.829275 -1.15319e-09 0.690467 0 0.54573C1.15319e-09 0.400994 0.0614851 0.262185 0.17093 0.159841C0.280375 0.0574964 0.428814 1.07837e-09 0.583592 0C0.738371 -1.07837e-09 0.88681 0.0574964 0.996255 0.159841L6.82894 5.61411C6.88317 5.66476 6.92619 5.72492 6.95554 5.79113C6.98489 5.85735 7 5.92832 7 6C7 6.07168 6.98489 6.14265 6.95554 6.20887C6.92619 6.27508 6.88317 6.33523 6.82894 6.38589Z" fill="black"/>
</svg>

      </Button>
      </LogoutLink>
        ) : (
          <div className="flex-1 flex flex-col justify-center mt-4">
        <nav className="flex-1 grid w-full shrink-0">
          <div className="flex justify-center align-middle">
            <Link className="flex text-base h-10 items-center px-4 font-medium text-gray-300 dark:text-gray-400" href="#">
              ABOUT

              <svg className="ms-2" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 0.499985V6.99978C9 7.13239 8.94732 7.25956 8.85356 7.35333C8.75979 7.44709 8.63262 7.49977 8.50002 7.49977C8.36741 7.49977 8.24024 7.44709 8.14647 7.35333C8.05271 7.25956 8.00003 7.13239 8.00003 6.99978V1.70682L0.854002 8.85348C0.760184 8.94729 0.63294 9 0.500263 9C0.367585 9 0.240341 8.94729 0.146523 8.85348C0.052706 8.75966 0 8.63241 0 8.49974C0 8.36706 0.052706 8.23982 0.146523 8.146L7.29318 0.999969H2.00022C1.86761 0.999969 1.74044 0.947292 1.64667 0.853527C1.55291 0.759762 1.50023 0.632589 1.50023 0.499985C1.50023 0.36738 1.55291 0.240207 1.64667 0.146442C1.74044 0.0526769 1.86761 0 2.00022 0H8.50002C8.63262 0 8.75979 0.0526769 8.85356 0.146442C8.94732 0.240207 9 0.36738 9 0.499985Z" fill="white"/>
            </svg>
            </Link>
            <Link className="flex text-base h-10 items-center px-4 font-medium text-gray-300 dark:text-gray-400" href="#">
              CONTACT US
              <svg className="ms-2" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 0.499985V6.99978C9 7.13239 8.94732 7.25956 8.85356 7.35333C8.75979 7.44709 8.63262 7.49977 8.50002 7.49977C8.36741 7.49977 8.24024 7.44709 8.14647 7.35333C8.05271 7.25956 8.00003 7.13239 8.00003 6.99978V1.70682L0.854002 8.85348C0.760184 8.94729 0.63294 9 0.500263 9C0.367585 9 0.240341 8.94729 0.146523 8.85348C0.052706 8.75966 0 8.63241 0 8.49974C0 8.36706 0.052706 8.23982 0.146523 8.146L7.29318 0.999969H2.00022C1.86761 0.999969 1.74044 0.947292 1.64667 0.853527C1.55291 0.759762 1.50023 0.632589 1.50023 0.499985C1.50023 0.36738 1.55291 0.240207 1.64667 0.146442C1.74044 0.0526769 1.86761 0 2.00022 0H8.50002C8.63262 0 8.75979 0.0526769 8.85356 0.146442C8.94732 0.240207 9 0.36738 9 0.499985Z" fill="white"/>
            </svg>
            </Link>
            <Link className="flex text-base h-10 items-center px-4 font-medium text-gray-300 dark:text-gray-400" href="#">
              BLOG
              <svg className="ms-2" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 0.499985V6.99978C9 7.13239 8.94732 7.25956 8.85356 7.35333C8.75979 7.44709 8.63262 7.49977 8.50002 7.49977C8.36741 7.49977 8.24024 7.44709 8.14647 7.35333C8.05271 7.25956 8.00003 7.13239 8.00003 6.99978V1.70682L0.854002 8.85348C0.760184 8.94729 0.63294 9 0.500263 9C0.367585 9 0.240341 8.94729 0.146523 8.85348C0.052706 8.75966 0 8.63241 0 8.49974C0 8.36706 0.052706 8.23982 0.146523 8.146L7.29318 0.999969H2.00022C1.86761 0.999969 1.74044 0.947292 1.64667 0.853527C1.55291 0.759762 1.50023 0.632589 1.50023 0.499985C1.50023 0.36738 1.55291 0.240207 1.64667 0.146442C1.74044 0.0526769 1.86761 0 2.00022 0H8.50002C8.63262 0 8.75979 0.0526769 8.85356 0.146442C8.94732 0.240207 9 0.36738 9 0.499985Z" fill="white"/>
            </svg>
            </Link>
          </div>
        </nav>
      </div>
        )
      }

      
    </div>
    </>
  )
}


