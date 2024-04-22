import { SpinnerDotted } from "spinners-react";
import Logo from "@/components/ui/logo";

export default async function loading() {
  return (
    <main className={`loader-container`}>
      
      <Logo width="42" height="52" />

      <div className="text-center">
        <h1 className={`loader_heading`}>
          Patience is a Virtue, Especially for Slow Wi-Fi
        </h1>
        <p className={`loader_description text-slate-400`}>
          Please wait while we gather the finest pixels
        </p>
      </div>

      <SpinnerDotted />
    </main>
  );
}
