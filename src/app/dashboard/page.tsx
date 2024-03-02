import { fetchUserId } from "../utils/userUtils";
import { DashLayout } from "@/components/component/dash-layout";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ErrorPageProtectedLayout } from "@/components/component/ProtectedLayout/error-page-protected-layout";

export default async function Protected() {
  const { isAuthenticated } = getKindeServerSession();
  
  if (!(await isAuthenticated())) {
    return <ErrorPageProtectedLayout />;
  }
  
  async function fetchUserData() {
    "use server"
    const userID = (await fetchUserId()) || "";
    const response = await fetch(
      `http://localhost:3000/api/onboard?id=${userID}`
    );
    const userData = await response.json();
    return userData;
  }

  const userData = await fetchUserData();

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
