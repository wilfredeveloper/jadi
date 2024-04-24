import { connectFirestore } from "../config/firestore";
import chalk from "chalk";
import firebase from "firebase-admin";

type DocumentData = {
  noteTitle: string;
  extension: string;
  description: string;
  mimeType: string;
  url: string;
  createdAt: string;
  size: number;
  cms_id: string;
  popularity: number;
  name: string;
  category: string;
  Tags: string[];
  updatedAt: string;
  upvotes: string[];
  views: number;
  saves: string[];
  likes: string[];
  updatedAtTime?: number | undefined;
};

export async function fetchFiles() {
  try {
    const db = await connectFirestore();
    if (!db) {
      console.log("\n---> [FIRESTORE]🚨 Firestore not connected");
      return [];
    }
    const fileCollection = await db?.collection("files").get();
    const docs = fileCollection.docs.map(
      (doc: firebase.firestore.QueryDocumentSnapshot) => {
        const data = doc.data() as DocumentData;
        return { id: doc.id, ...data }; // Include the document ID in the returned data
      }
    );
    return docs;
  } catch (error: any) {
    console.error(
      "\n---> [FIRESTORE]🚨 Error fetching documents: ",
      `\n\n+ Error details: ${chalk.red(error.details)}`
    );
    return [];
  }
}
