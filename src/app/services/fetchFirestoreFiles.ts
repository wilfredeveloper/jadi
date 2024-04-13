import { connectFirestore } from "../config/firestore";

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
    upvotes: number;
    views: number;
    saves: number;
  };

export async function fetchFiles() {
    try {
     const db = await connectFirestore()
     if (!db) {
         console.log("\n---> [FIRESTORE]🚨 Firestore not connected");
         return [];
     };
     const fileCollection = await db?.collection('files').get();
     const docs = fileCollection.docs.map(doc => doc.data() as DocumentData);
     return docs;
    } catch (error) {
     console.error("\n---> [FIRESTORE]🚨 Error fetching documents: ", error);
     return [];
    }
 }