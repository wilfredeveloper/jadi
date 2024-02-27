// Importing necessary modules from the kinde-auth-nextjs library
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {createKindeManagementAPIClient} from "@kinde-oss/kinde-auth-nextjs/server";

/**
 * Fetches the user data from the server session.
 * @returns {Promise<Object>} The user data or undefined if an error occurs.
 */
export async function fetchUserData() {
    const { getUser } = getKindeServerSession();
    const userData = await getUser();

    if(!userData) { 
        console.log("Error Fetching user data"); 
        return undefined;
    };

    return userData;
}

/**
 * Fetches the user's ID.
 * @returns {Promise<string>} The user's ID or undefined if the user is not found.
 */
export async function fetchUserId() { 
    const user = await fetchUserData();

    if (user) {
        const { id } = user;
        return id; 
    } else {
        console.error("User not found");
        return undefined;
    }
}