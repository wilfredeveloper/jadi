"use server";
import { db } from "@/src/db"
import { UserProfiles } from "@/src/db/schema"
import { fetchBasicUserData } from "../utils/userUtils";


export async function createUser(
  prevState: { message: string },
  formData: FormData
) {

  const userData = await fetchBasicUserData();

  if (!userData) {
    throw new Error('userData is undefined');
  }

  const email = userData.email;
  const profilePhotoURL = userData.picture;
  const kinde_ID = userData.id;
  const firstName = userData.given_name;
  const lastName = userData.family_name;

  const major = formData.get('major')?.toString();
  const institution = formData.get('institution')?.toString();
  const inputInterests = formData.getAll('inputInterests').map((interest) => JSON.parse(interest.toString()));
  const selectedInterests = formData.getAll('selectedInterests').map((interest) => JSON.parse(interest.toString()));
  const interests = [...inputInterests.flat(), ...selectedInterests.flat()];

  const userDataModel = {
    kindeID: kinde_ID,
    firstName,
    lastName,
    email,
    coursemajor: major,
    interests,
    institution,
    profilePhotoURL,
  }

  console.log("\nCreating user with the following data:");
  console.log(userDataModel);

  try {
    await db.insert(UserProfiles).values({
      ...userDataModel,
    }).execute();
    return { message: "User created" };
  } catch (error) {
    console.error(error);
    return { message: "Insertion to db failed" };
  }
}

export async function createTodo(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const todo = formData.get('todo')?.toString();

  console.log("Creating todo with the following data:");
  console.log({ todo });

  return { message: "Todo created" };
}