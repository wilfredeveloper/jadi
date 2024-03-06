import OnboardingComponent from "@/components/OnboardingComponent/OnboardingComponent";
import { fetchBasicUserData } from "../utils/userUtils";
import styles from "./page.module.css"
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/Image"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ErrorPageProtectedLayout } from "@/components/component/ProtectedLayout/error-page-protected-layout";

export default async function Page() {
  const userData = await fetchBasicUserData();
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return <ErrorPageProtectedLayout />;
  }

  return (userData ? (
    <main className={`${styles.main}`}>
      <OnboardingComponent userData={userData} />
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={2}
        particleDensity={30}
        className={`absolute h-screen top-0 left-0 w-screen ${styles.sparkles}`}
        particleColor={"#FFA65C"}
      />
      <Image alt="bacground image of a tech like studio" src="/bg1.jpg" objectFit="cover" fill className={`${styles.bg}`}/>
    </main>
  ) : (
    <p className="text-white"> loading.. </p>
  ))
}