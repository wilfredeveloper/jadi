const fs = require("fs");
import { Client } from "../config/sanity";
import { connectFirestore } from "../config/firestore";

const postToFirestore = async (data: any) => {
  const db = await connectFirestore();
  try {
    const docRef = await db.collection("files").doc();
    await docRef.set(data);
    console.log("\n[FIRESTORE]🎉 Document written with ID: ", docRef.id);
    return docRef;
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

    await postToFirestore({
      url: sanityResponse.url,
      size: sanityResponse?.size,
      name: sanityResponse?.originalFilename,
      mimeType: sanityResponse?.mimeType,
      extension: sanityResponse?.extension,
      cms_id: sanityResponse?._id,
      createdAt: sanityResponse?._createdAt,
      updatedAt: sanityResponse?._updatedAt,
      noteTitle: title, 
      Tags: tagsArray, 
      category: category,
      description: description,
      upvotes: 0, // Initialize upvotes with 0
      views: 0, // Initialize views with 0
      popularity: 0, // Initialize popularity with 0
      saves: 0, // Initialize saves with 0
    });
    return
  } catch (error) {
    console.log(error);
  }
};

export { PostFile };
