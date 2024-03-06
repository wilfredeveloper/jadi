// Importing necessary modules from the kinde-auth-nextjs library
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { createKindeManagementAPIClient } from "@kinde-oss/kinde-auth-nextjs/server";

/**
 * Fetches the user data from the server session.
 * @returns {Promise<Object>} The user data or undefined if an error occurs.
 */
export async function fetchBasicUserData() {
  const { getUser } = getKindeServerSession();
  const userData = await getUser();

  if (!userData) {
    console.log("\n🪵FROM fetchBasicUserUtils() >> Error Fetching user data\n");
    return undefined;
  }

  return userData;
}

/**
 * Fetches the user's ID.
 * @returns {Promise<string>} The user's ID or undefined if the user is not found.
 */
export async function fetchUserId() {
  const user = await fetchBasicUserData();

  if (user) {
    const { id } = user;
    return id;
  } else {
    console.error("User not found");
    return undefined;
  }
}

// 📚 Helper function to fetch user data from the server
export async function fetchComprehensiveUserData() {
  "use server";
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
