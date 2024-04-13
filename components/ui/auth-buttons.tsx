"use client"
import { usePathname } from 'next/navigation'
import { Button } from "./button";
import { LoginLink, RegisterLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components"


export default function AuthButtonsGroup() {
  const pathname = usePathname();
  return (
    <>
      <LoginLink postLoginRedirectURL={`${pathname}`}>
        <Button size={"sm"} className="mx-2" variant={"outline"}>
          Sign in
        </Button>
      </LoginLink>

      <RegisterLink postLoginRedirectURL={`${pathname}`}>
        <Button size={"sm"} className="mx-2">
          Create Account
        </Button>
      </RegisterLink>
    </>
  );
}
