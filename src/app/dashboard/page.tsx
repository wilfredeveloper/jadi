import {LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { fetchUserData, isNewUser } from "../utils/userUtils";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Page() {
    const { isAuthenticated } = getKindeServerSession();
    const userData = await fetchUserData();


    return ( await isAuthenticated()) ? (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <div>
                {await isNewUser() ? (
                    <div>Welcome to onboarding</div>
                ): (
                    <div>
                        <div>Welcome back {userData?.given_name}</div>
                        <pre>{ JSON.stringify(userData, null, 2)}</pre>
                    </div>
                )}
            </div>
            <LogoutLink>Log out</LogoutLink>
        </main>
    ) : (
        <div>
            This page is Protected <br />Please 👉 <LoginLink>Login</LoginLink> 👈 to view it
        </div>
    )
}