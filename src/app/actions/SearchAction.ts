import { collection, query, where, getDocs } from "firebase/firestore/lite";
import { firestoreClientDB } from "../config/firestore-client";

export async function Search(
  prevState:
    | {
        message: string;
      }
    | undefined,
  formData: FormData
) {
  const search = formData.get("search-term") as string;
  console.log({ search });
  const db = firestoreClientDB;

  if (!db) return console.log("Firestore not connected");

  try {
    const filesCollection = collection(firestoreClientDB, "files");

    // Define a query to find files that match the search term
    const q = query(filesCollection, where("noteTitle", "==", search));

    // Execute the query
    const querySnapshot = await getDocs(q);

    // Log the results
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error getting documents: ", error);
  }
}