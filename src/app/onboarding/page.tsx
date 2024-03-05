import OnboardingComponent from "@/components/OnboardingComponent/OnboardingComponent";
import { fetchUserData } from "../utils/userUtils";
import styles from "./page.module.css"
import { SparklesCore } from "@/components/ui/sparkles";

export default async function Page() {
  const userData = await fetchUserData();
  console.log(userData)

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
    </main>
  ) : (
    <p className="text-white"> loading.. </p>
  ))
}