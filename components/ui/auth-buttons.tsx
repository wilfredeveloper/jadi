import { Button } from "./button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components"

export default function AuthButtonsGroup() {
  return (
    <>
      <LoginLink postLoginRedirectURL="/dashboard">
        <Button size={"sm"} className="mx-2" variant={"outline"}>
          Sign in
        </Button>
      </LoginLink>

      <RegisterLink postLoginRedirectURL="/onboarding">
        <Button size={"sm"} className="mx-2">
          Create Account
        </Button>
      </RegisterLink>
    </>
  );
}
