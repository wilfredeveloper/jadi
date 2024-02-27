import {LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { fetchUserData, fetchUserId } from "../utils/userUtils";
import { DashLayout } from "@/components/component/dash-layout";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


export default async function Protected() {
const { isAuthenticated } = getKindeServerSession();
// const userData = await fetchUserData() || "";
const userID = await fetchUserId() || "";

const response = await fetch(`http://localhost:3000/api/onboard?id=${userID}`);

const userData = await response.json();

return (await isAuthenticated()) ? (
    // 1️⃣ If the user is authenticated, display the user's data
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {userData ? (
          <DashLayout userData={{
            family_name: userData.lastName,
            given_name: userData.firstName,
            picture: userData.picture,
            email: userData.preferredEmail
          }} />
        ) : (
          <div>Loading...</div> // Replace this with your preferred fallback UI
        )}
      </div>
    </main>
    
    // 2️⃣ If the user is not authenticated, display a message to prompt the user to log in
  ) : (
    <div>
      This page is protected, please <LoginLink>Login</LoginLink> to view it
    </div>
  );
}