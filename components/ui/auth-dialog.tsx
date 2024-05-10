"use client";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import styles from "./authButtonsStyles.module.css";
import { useToast } from "./use-toast";

import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import { Button } from "./button";

interface AuthDialogProps {
  onNav?: boolean;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void | undefined;
}

export default function AuthDialog({
  onNav = false,
  isOpen = false,
  onOpenChange = () => {},
}: AuthDialogProps) {
  const pathname = usePathname();
  const { toast } = useToast();

  const handleOpenChange = (open: boolean) => {
    if(!open) {
      toast({
        title: "Authentication Required",
        description: "You will not be able to perform any actions on the platform without being authenticated.",
        action: (
          <Button
            size={"sm"}
            className="bg-green-400"
            variant={"default"}
            onClick= { () => { onOpenChange(true) }}
          >
            {"Sign in"}
            <GhostIcon />
          </Button>
        )
      });
    }

    if(onOpenChange) {
      onOpenChange(open);
    }
  }
  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>

      <DialogContent className={`${styles.dialog_content}`}>
        <DialogHeader>
          <DialogTitle>Choose the action you want to take</DialogTitle>
          <DialogDescription>
            You can choose to create a new account or login to an existing one
          </DialogDescription>
        </DialogHeader>

        <div>
          <LoginLink postLoginRedirectURL={`${pathname}`}>
            <Button size={"sm"} className={`mx-2 auth_btn`} variant={"outline"}>
              Sign in
            </Button>
          </LoginLink>

          <RegisterLink postLoginRedirectURL={`/onboarding`}>
            <Button size={"sm"} className="mx-2 auth_btn">
              Create Account
            </Button>
          </RegisterLink>
        </div>
        <DialogFooter>
          <p className={`text-slate-500 text-sm capitalize`}>
            Designed at pxum studios
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function AuthIcon(props: any) {
  return (
    <svg
      className="ms-2"
      width="18"
      height="18"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.68182 2.52944e-06C4.55806 2.52944e-06 3.45954 0.333235 2.52517 0.957561C1.5908 1.58189 0.862548 2.46927 0.432505 3.50748C0.00246184 4.5457 -0.110057 5.68812 0.109177 6.79029C0.328411 7.89245 0.869552 8.90485 1.66417 9.69947C2.45878 10.4941 3.47119 11.0352 4.57335 11.2545C5.67552 11.4737 6.81794 11.3612 7.85616 10.9311C8.89437 10.5011 9.78175 9.77284 10.4061 8.83847C11.0304 7.9041 11.3636 6.80558 11.3636 5.68182C11.3636 4.17491 10.765 2.72972 9.69947 1.66417C8.63392 0.598621 7.18873 2.52944e-06 5.68182 2.52944e-06ZM5.68182 9.09091C5.00757 9.09091 4.34845 8.89097 3.78783 8.51637C3.22721 8.14178 2.79026 7.60935 2.53223 6.98642C2.27421 6.36349 2.20669 5.67804 2.33823 5.01674C2.46977 4.35544 2.79446 3.748 3.27123 3.27123C3.748 2.79446 4.35544 2.46977 5.01674 2.33823C5.67804 2.20669 6.36349 2.27421 6.98642 2.53223C7.60935 2.79026 8.14178 3.22721 8.51637 3.78783C8.89097 4.34845 9.09091 5.00757 9.09091 5.68182C9.09091 6.58597 8.73174 7.45308 8.09241 8.09241C7.45308 8.73174 6.58597 9.09091 5.68182 9.09091ZM19.3182 11.3636C20.4419 11.3636 21.5405 11.0304 22.4748 10.4061C23.4092 9.78175 24.1375 8.89437 24.5675 7.85616C24.9975 6.81794 25.1101 5.67552 24.8908 4.57335C24.6716 3.47119 24.1304 2.45878 23.3358 1.66417C22.5412 0.869552 21.5288 0.328411 20.4266 0.109177C19.3245 -0.110057 18.1821 0.00246184 17.1438 0.432505C16.1056 0.862548 15.2182 1.5908 14.5939 2.52517C13.9696 3.45954 13.6364 4.55806 13.6364 5.68182C13.6364 7.18873 14.235 8.63392 15.3005 9.69947C16.3661 10.765 17.8113 11.3636 19.3182 11.3636ZM19.3182 2.27273C19.9924 2.27273 20.6515 2.47267 21.2122 2.84726C21.7728 3.22186 22.2097 3.75429 22.4678 4.37722C22.7258 5.00015 22.7933 5.6856 22.6618 6.3469C22.5302 7.0082 22.2055 7.61564 21.7288 8.09241C21.252 8.56918 20.6446 8.89386 19.9833 9.02541C19.322 9.15695 18.6365 9.08943 18.0136 8.83141C17.3906 8.57338 16.8582 8.13643 16.4836 7.57581C16.109 7.01519 15.9091 6.35607 15.9091 5.68182C15.9091 4.77767 16.2683 3.91056 16.9076 3.27123C17.5469 2.6319 18.414 2.27273 19.3182 2.27273ZM5.68182 13.6364C4.55806 13.6364 3.45954 13.9696 2.52517 14.5939C1.5908 15.2182 0.862548 16.1056 0.432505 17.1438C0.00246184 18.1821 -0.110057 19.3245 0.109177 20.4266C0.328411 21.5288 0.869552 22.5412 1.66417 23.3358C2.45878 24.1304 3.47119 24.6716 4.57335 24.8908C5.67552 25.1101 6.81794 24.9975 7.85616 24.5675C8.89437 24.1375 9.78175 23.4092 10.4061 22.4748C11.0304 21.5405 11.3636 20.4419 11.3636 19.3182C11.3636 17.8113 10.765 16.3661 9.69947 15.3005C8.63392 14.235 7.18873 13.6364 5.68182 13.6364ZM5.68182 22.7273C5.00757 22.7273 4.34845 22.5273 3.78783 22.1527C3.22721 21.7781 2.79026 21.2457 2.53223 20.6228C2.27421 19.9999 2.20669 19.3144 2.33823 18.6531C2.46977 17.9918 2.79446 17.3844 3.27123 16.9076C3.748 16.4308 4.35544 16.1061 5.01674 15.9746C5.67804 15.8431 6.36349 15.9106 6.98642 16.1686C7.60935 16.4266 8.14178 16.8636 8.51637 17.4242C8.89097 17.9848 9.09091 18.6439 9.09091 19.3182C9.09091 20.2223 8.73174 21.0894 8.09241 21.7288C7.45308 22.3681 6.58597 22.7273 5.68182 22.7273ZM25 19.3182C25 19.6196 24.8803 19.9086 24.6672 20.1217C24.4541 20.3348 24.165 20.4545 23.8636 20.4545H20.4545V23.8636C20.4545 24.165 20.3348 24.4541 20.1217 24.6672C19.9086 24.8803 19.6196 25 19.3182 25C19.0168 25 18.7278 24.8803 18.5146 24.6672C18.3015 24.4541 18.1818 24.165 18.1818 23.8636V20.4545H14.7727C14.4713 20.4545 14.1823 20.3348 13.9692 20.1217C13.7561 19.9086 13.6364 19.6196 13.6364 19.3182C13.6364 19.0168 13.7561 18.7278 13.9692 18.5146C14.1823 18.3015 14.4713 18.1818 14.7727 18.1818H18.1818V14.7727C18.1818 14.4713 18.3015 14.1823 18.5146 13.9692C18.7278 13.7561 19.0168 13.6364 19.3182 13.6364C19.6196 13.6364 19.9086 13.7561 20.1217 13.9692C20.3348 14.1823 20.4545 14.4713 20.4545 14.7727V18.1818H23.8636C24.165 18.1818 24.4541 18.3015 24.6672 18.5146C24.8803 18.7278 25 19.0168 25 19.3182Z"
        fill="black"
      />
    </svg>
  );
}



function GhostIcon(props: any) {
  return (
    <svg
      width="22"
      className="ms-2"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 0C8.08364 0.00333593 5.28769 1.16333 3.22551 3.22551C1.16333 5.28769 0.00333595 8.08364 2.06235e-08 11V22C-3.67956e-05 22.1736 0.0492193 22.3436 0.142038 22.4903C0.234856 22.637 0.36742 22.7543 0.524308 22.8286C0.681196 22.903 0.855958 22.9312 1.02826 22.91C1.20056 22.8889 1.36332 22.8193 1.4976 22.7093L4.2774 20.4348L7.05833 22.7093C7.22209 22.8432 7.42714 22.9164 7.6387 22.9164C7.85026 22.9164 8.05531 22.8432 8.21906 22.7093L11 20.4348L13.7809 22.7093C13.9447 22.8432 14.1497 22.9164 14.3613 22.9164C14.5729 22.9164 14.7779 22.8432 14.9417 22.7093L17.7226 20.4348L20.5024 22.7093C20.6367 22.8193 20.7994 22.8889 20.9717 22.91C21.144 22.9312 21.3188 22.903 21.4757 22.8286C21.6326 22.7543 21.7651 22.637 21.858 22.4903C21.9508 22.3436 22 22.1736 22 22V11C21.9967 8.08364 20.8367 5.28769 18.7745 3.22551C16.7123 1.16333 13.9164 0.00333593 11 0ZM7.79167 11.9167C7.51972 11.9167 7.25388 11.836 7.02776 11.6849C6.80164 11.5339 6.6254 11.3191 6.52133 11.0679C6.41726 10.8166 6.39003 10.5401 6.44309 10.2734C6.49614 10.0067 6.6271 9.76169 6.81939 9.56939C7.01169 9.3771 7.25669 9.24614 7.52342 9.19309C7.79014 9.14003 8.06661 9.16726 8.31786 9.27133C8.5691 9.3754 8.78385 9.55164 8.93494 9.77776C9.08602 10.0039 9.16667 10.2697 9.16667 10.5417C9.16667 10.9063 9.0218 11.2561 8.76394 11.5139C8.50608 11.7718 8.15634 11.9167 7.79167 11.9167ZM14.2083 11.9167C13.9364 11.9167 13.6705 11.836 13.4444 11.6849C13.2183 11.5339 13.0421 11.3191 12.938 11.0679C12.8339 10.8166 12.8067 10.5401 12.8598 10.2734C12.9128 10.0067 13.0438 9.76169 13.2361 9.56939C13.4284 9.3771 13.6734 9.24614 13.9401 9.19309C14.2068 9.14003 14.4833 9.16726 14.7345 9.27133C14.9858 9.3754 15.2005 9.55164 15.3516 9.77776C15.5027 10.0039 15.5833 10.2697 15.5833 10.5417C15.5833 10.9063 15.4385 11.2561 15.1806 11.5139C14.9227 11.7718 14.573 11.9167 14.2083 11.9167Z"
        fill="black"
      />
    </svg>
  );
}
