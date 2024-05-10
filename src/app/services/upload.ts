// const fs = require("fs");
import { Client } from "../config/sanity";
import { connectFirestore } from "../config/firestore";
import { saveToAlgolia } from "./algoliaService";

const postToFirestore = async (data: any) => {
  const db = await connectFirestore();

  if (!db) return console.log("Firestore not connected");

  try {
    const docRef = await db.collection("files").doc();
    await docRef.set(data);
    console.log("\n[FIRESTORE]🎉 Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("\n[FIRESTORE]🚨 Error adding document: ", error);
  }
};

const postToSanity = async (file: File) => {
  const response = await Client.assets.upload("file", file);
  console.log("🎉 Posted to sanity:: ", response);
  return response;
};

const PostFile = async (
  file: File,
  tags: string,
  description: string,
  category: string,
  title: string
) => {
  try {
    const sanityResponse = await postToSanity(file);

    const tagsArray = tags.split(",").map((tag) => tag.trim());

    const data = {
      url: sanityResponse.url,
      size: sanityResponse?.size,
      name: sanityResponse?.originalFilename || null,
      mimeType: sanityResponse?.mimeType,
      extension: sanityResponse?.extension,
      cms_id: sanityResponse?._id,
      createdAt: sanityResponse?._createdAt,
      updatedAt: sanityResponse?._updatedAt,
      noteTitle: title,
      Tags: tagsArray,
      category: category,
      description: description,
      upvotes: [], // Initialize upvotes with 0
      views: 0, // Initialize views with 0
      popularity: 0, // Initialize popularity with 0
      saves: [], // Initialize saves with 0
      likes: [],
    };

    
    const firestoreID = await postToFirestore(data);

    if(!firestoreID) {
      throw new Error("Failed to post to firestore")
    }

    const algoliaData = {
      objectID: firestoreID,
      cms_id: sanityResponse._id,
      url: sanityResponse.url,
      name: sanityResponse.originalFilename || null,
      Tags: tagsArray,
      category: category,
      description: description,
      noteTitle: title,
      upvotes: 0,
      views: 0,
      popularity: 0,
      saves: 0,
      likes: [],
      size: sanityResponse?.size || null,
      mimeType: sanityResponse?.mimeType || null,
      extension: sanityResponse?.extension || null,
      createdAt: sanityResponse?._createdAt || null,
      updatedAt: sanityResponse?._updatedAt || null,
    };

    // Save to Algolia
    await saveToAlgolia(algoliaData);
    return;
  } catch (error) {
    console.log(error);
  }
};

export { PostFile };
