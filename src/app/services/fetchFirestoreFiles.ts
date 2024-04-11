import { connectFirestore } from "../config/firestore";


export async function fetchFiles() {
   try {
    const db = await connectFirestore()
    if (!db) {
        console.log("\n---> [FIRESTORE]🚨 Firestore not connected");
        return [];
    };
    const fileCollection = await db?.collection('files').get();
    return fileCollection.docs.map(doc => doc.data());
   } catch (error) {
    console.error("\n---> [FIRESTORE]🚨 Error fetching documents: ", error);
    return [];
   }
}