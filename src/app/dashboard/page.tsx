import { fetchComprehensiveUserData } from "../utils/userUtils";
import { DashLayout } from "@/components/component/dash-layout";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ErrorPageProtectedLayout } from "@/components/component/ProtectedLayout/error-page-protected-layout";

// 🛡️ This is a protected component, it will only render if the user is authenticated
export default async function Protected() {
  // 🔐 Checking if the user is authenticated using Kinde server session
  const { isAuthenticated } = getKindeServerSession();
  
  

  // 📥 Fetching the user data
  const userData = await fetchComprehensiveUserData();

  // 🎨 Rendering the main layout with user data
  return ( await isAuthenticated() ? (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DashLayout
        userData={{
          family_name: userData.lastName,
          given_name: userData.firstName,
          picture: userData.picture,
          email: userData.preferredEmail,
        }}
      />
    </main>
  ) : (
    <ErrorPageProtectedLayout />
  ))
}