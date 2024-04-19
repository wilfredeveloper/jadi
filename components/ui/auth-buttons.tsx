"use client";
import { usePathname } from "next/navigation";
import { Button } from "./button";
import styles from "./authButtonsStyles.module.css";
import {
  LoginLink,
  RegisterLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AuthButtonsGroup() {
  const pathname = usePathname();
  return (
    <div className={``}>
      <Dialog>
        <DialogTrigger>
          <Button size={"sm"} className="mx-2 auth_btn" variant={"default"}>
            Get Authenticated
          </Button>
        </DialogTrigger>
        <DialogContent className={`${styles.dialog_content}`}>
          <DialogHeader>
            <DialogTitle>Choose the action you want to take</DialogTitle>
            <DialogDescription>
              You can choose to create a new account or login to an existing one
            </DialogDescription>
          </DialogHeader>

          <div>
            <LoginLink postLoginRedirectURL={`${pathname}`}>
              <Button
                size={"sm"}
                className={`mx-2 auth_btn`}
                variant={"outline"}
              >
                Sign in
              </Button>
            </LoginLink>

            <RegisterLink postLoginRedirectURL={`${pathname}`}>
              <Button size={"sm"} className="mx-2 auth_btn">
                Create Account
              </Button>
            </RegisterLink>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
