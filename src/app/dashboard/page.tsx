import {LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { fetchUserData, isNewUser } from "../utils/userUtils";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { DashLayout } from "@/components/component/dash-layout";

export default async function Page() {
    const { isAuthenticated } = getKindeServerSession();
    const userData = await fetchUserData();
    console.log(userData);

    return ( await isAuthenticated()) ? (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <div>
                {await isNewUser() ? (
                    <div>
                        <div>Welcome to onboarding</div>
                    </div>
                ): (
                    userData ? (
                        <div>
                            <DashLayout userData={{
                                family_name: userData.family_name,
                                given_name: userData.given_name,
                                picture: userData.picture,
                                email: userData.email
                            
                            }}/>
                        </div>
                    ) : (
                        <div>Loading...</div> // Replace this with your preferred fallback UI
                    )
                )}
            </div>
        </main>
    ) : (
        <div>
            This page is Protected <br />Please 👉 <LoginLink>Login</LoginLink> 👈 to view it
        </div>
    )
}