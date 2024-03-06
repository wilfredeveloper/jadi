import { fetchUserId } from "../utils/userUtils";
import { DashLayout } from "@/components/component/dash-layout";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ErrorPageProtectedLayout } from "@/components/component/ProtectedLayout/error-page-protected-layout";

// 🛡️ This is a protected component, it will only render if the user is authenticated
export default async function Protected() {
  // 🔐 Checking if the user is authenticated using Kinde server session
  const { isAuthenticated } = getKindeServerSession();
  
  // 🚫 If the user is not authenticated, render the ErrorPageProtectedLayout
  if (!(await isAuthenticated())) {
    return <ErrorPageProtectedLayout />;
  }
  
  // 📚 Helper function to fetch user data from the server
  async function fetchUserData() {
    "use server"
    // 🆔 Fetching the user ID
    const userID = (await fetchUserId()) || "";
    // 🌐 Making a request to the server to fetch user data
    const response = await fetch(
      `http://localhost:3000/api/onboard?id=${userID}`
    );
    // 📦 Parsing the response to JSON
    const userData = await response.json();
    return userData;
  }

  // 📥 Fetching the user data
  const userData = await fetchUserData();

  // 🎨 Rendering the main layout with user data
  return (
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
  );
}