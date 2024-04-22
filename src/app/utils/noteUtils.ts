import { firestoreClientDB } from "@/src/app/config/firestore-client";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore/lite";

interface fileProps {
  userId: string;
  fileId: string;
}

const likeFile = async (
  { userId, fileId }: fileProps,
  callback: (hasLiked: boolean) => void
) => {
  const db = firestoreClientDB;

  if (!db) return console.log("Firestore not connected");

  try {
    const fileRef = doc(db, "files", fileId);
    const fileDoc = await getDoc(fileRef);

    if (!fileDoc.exists()) {
      throw "Document does not exist!";
    }

    const likes = fileDoc.data()?.likes;

    // if user hasn't liked the document yet, add their ID to the likes array
    if (likes && !likes.includes(userId)) {
      likes.push(userId);
      await updateDoc(fileRef, { likes });
      callback(true); // Call the callback function with true
    } else {
      likes.splice(likes.indexOf(userId), 1);
      await updateDoc(fileRef, { likes });
      callback(false); // Call the callback function with false
    }
  } catch (error) {
    console.log("\n --> Error Liking file: ", error);
  }
};

export { likeFile };
