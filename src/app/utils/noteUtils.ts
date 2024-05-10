import { firestoreClientDB } from "@/src/app/config/firestore-client";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore/lite";

import chalk from "chalk";
import { updatePopularity } from "../services/updatePopularity";
import { updatePartialAlgoliaData } from "../services/algoliaService";
interface MaxValues {
  maxSaves: number;
  maxViews: number;
  maxUpvotes: number;
  maxLikes: number;
  maxUpdatedAtTime: number;
}
interface fileProps {
  userId: string;
  fileId: string;
  maxValues: MaxValues;
}

interface FileData {
  saves: string[];
  views: number;
  upvotes: string[];
  popularity: number;
  likes: string[];
  noteTitle: string;
  updatedAtTime: number;
}

const likeFile = async (
  { userId, fileId, maxValues }: fileProps,
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

    const fileData = fileDoc.data() as FileData;
    const likes = fileDoc.data()?.likes;
    console.log("Old likes", likes.length)
    console.log(chalk.greenBright("\nLikes Before Update: ", likes));

    // if user hasn't liked the document yet, add their ID to the likes array
    if (likes && !likes.includes(userId)) {
      likes.push(userId);
      await updateDoc(fileRef, { likes });
      console.log(chalk.greenBright("\nLikes After Update: ", likes));

      // Recalculate maxLikes
      maxValues.maxLikes = Math.max(maxValues.maxLikes, likes.length);
      
      callback(true); // Call the callback function with true
    } else {
      likes.splice(likes.indexOf(userId), 1);
      await updateDoc(fileRef, { likes });
      console.log(chalk.greenBright("\nLikes After Update: ", likes));
      maxValues.maxLikes = Math.max(maxValues.maxLikes, likes.length);
      callback(false); // Call the callback function with false
    }

    console.log(
      chalk.yellowBright(
        "\n",
        fileData.noteTitle,
        "Popularity Before Update: ",
        fileData.popularity.toFixed(4)
      )
    );

    updatePopularity(
      fileData,
      maxValues.maxSaves,
      maxValues.maxViews,
      maxValues.maxUpvotes,
      maxValues.maxLikes,
      maxValues.maxUpdatedAtTime
    );
    await updateDoc(fileRef, { popularity: fileData.popularity });

    console.log(
      chalk.greenBright(
        "\n",
        fileData.noteTitle,
        "Popularity After Update: ",
        fileData.popularity.toFixed(4)
      )
    );


    const algoliaData = {
      objectID: fileId,
      likes: likes.length,
      popularity: fileData.popularity,
    }

    console.log("New Likes", likes.length)

    updatePartialAlgoliaData(algoliaData)
  } catch (error) {
    console.log("\n --> Error Liking file: ", error);
  }
};

const UpvoteFile = async (
  { userId, fileId, maxValues }: fileProps,
  callback: (hasUpvoted: boolean) => void
) => {
  const db = firestoreClientDB;

  if (!db) return console.log("Firestore not connected");

  try {
    const fileRef = doc(db, "files", fileId);
    const fileDoc = await getDoc(fileRef);

    if (!fileDoc.exists()) {
      throw "Document does not exist!";
    }

    const fileData = fileDoc.data() as FileData;
    const upvotes = fileDoc.data()?.upvotes;
    console.log(chalk.greenBright("\nUpvotes Before Update: ", upvotes));

    // if user hasn't upvoted the document yet, add their ID to the upvotes array
    if (upvotes && !upvotes.includes(userId)) {
      upvotes.push(userId);
      await updateDoc(fileRef, { upvotes });
      console.log(chalk.greenBright("\nUpvotes After Update: ", upvotes));

      // Recalculate maxUpvotes
      maxValues.maxUpvotes = Math.max(maxValues.maxUpvotes, upvotes.length);
      
      callback(true); // Call the callback function with true
    } else {
      upvotes.splice(upvotes.indexOf(userId), 1);
      await updateDoc(fileRef, { upvotes });
      console.log(chalk.greenBright("\nUpvotes After Update: ", upvotes));
      maxValues.maxUpvotes = Math.max(maxValues.maxUpvotes, upvotes.length);
      callback(false); // Call the callback function with false
    }

    console.log(
      chalk.yellowBright(
        "\n",
        fileData.noteTitle,
        "Popularity Before Update: ",
        fileData.popularity.toFixed(4)
      )
    );

    updatePopularity(
      fileData,
      maxValues.maxSaves,
      maxValues.maxViews,
      maxValues.maxUpvotes,
      maxValues.maxLikes,
      maxValues.maxUpdatedAtTime
    );
    await updateDoc(fileRef, { popularity: fileData.popularity });

    console.log(
      chalk.greenBright(
        "\n",
        fileData.noteTitle,
        "Popularity After Update: ",
        fileData.popularity.toFixed(4)
      )
    );

    const algoliaData = {
      objectID: fileId,
      upvotes: upvotes.length,
      popularity: fileData.popularity,
    
    }

    updatePartialAlgoliaData(algoliaData)
  } catch (error) {
    console.log("\n --> Error Upvoting file: ", error);
  }
};

export { likeFile, UpvoteFile };
