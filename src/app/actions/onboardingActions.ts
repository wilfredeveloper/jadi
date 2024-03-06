"use server";
import { db } from "@/src/db"
import { UserProfiles } from "@/src/db/schema"


export async function createUser(
  prevState: { message: string },
  formData: FormData
) {

  const major = formData.get('major')?.toString();
  const email = formData.get('email')?.toString();
  const profilePhotoURL = formData.get('profilePhotoURL')?.toString();
  const kinde_ID = formData.get('kinde_ID')?.toString();
  if (!kinde_ID) {
    throw new Error('kinde_ID is required');
  }
  const firstName = formData.get('firstName')?.toString();
  const lastName = formData.get('lastName')?.toString();
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
    db.insert(UserProfiles).values({
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