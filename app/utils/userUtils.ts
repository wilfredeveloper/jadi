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

/**
 * Fetches the user's profile picture.
 * @returns {Promise<string>} The URL of the user's profile picture or undefined if the user is not found.
 */
export async function fetchUserImage() {
    const user = await fetchUserData();

    if (user) {
        const { picture } = user;
        return picture;
    } else {
        console.error("User not found. Can't fetch image");
        return undefined;
    }
}

/**
 * Checks if the user is new (i.e., has only signed in once).
 * @returns {Promise<boolean>} True if the user is new, false otherwise.
 */
export async function isNewUser() {
    const userId = await fetchUserId() || "";

    const client = await createKindeManagementAPIClient();
    const userData = await client.usersApi.getUserData({ id: userId });

    if (userData.totalSignIns === 1) {
        return true;
    } else {
        return false;
    }
}