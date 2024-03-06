import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { fetchBasicUserData } from "../utils/userUtils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { DashLayout } from "@/components/component/dash-layout";

export default async function Page() {
  const { isAuthenticated } = getKindeServerSession();
  const userData = await fetchBasicUserData();
  console.log(userData);

  return (await isAuthenticated()) ? (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        ( userData ? (
        <DashLayout
          userData={{
            family_name: userData?.family_name || null,
            given_name: userData?.given_name || null,
            picture: userData?.picture || null,
            email: userData?.email || null,
          }}
        />
        ) : (<div>Loading...</div>))
      </div>
    </main>
  ) : (
    <div>
      This page is Protected <br />
      Please 👉 <LoginLink>Login</LoginLink> 👈 to view it
    </div>
  );
}
