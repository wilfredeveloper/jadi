import index from "../config/algolia-client";

interface Data {
  objectID: string;
  cms_id?: string | null;
  url?: string;
  size?: number | null;
  name?: string | null;
  mimeType?: string | null;
  extension?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  noteTitle?: string;
  Tags?: string[];
  category?: string;
  description?: string;
  upvotes?: number;
  views?: number;
  popularity?: number;
  saves?: number;
  likes?: string[];
}

export const saveToAlgolia = async (data: Data) => {
  try {
    const { objectIDs } = await index.saveObjects([data]);
    return console.log("\n[ALGOLIA]🎉 RUpdated record Index", objectIDs);
  } catch (error) {
    return console.error("\n[ALGOLIA]🚨 Error updating record Index: ", error);
  }
};

export const updatePartialAlgoliaData = async (data: Data) => {
  try {
    const { objectIDs } = await index.partialUpdateObjects([data]);
    return console.log("\n[ALGOLIA]🎉 Updated record Index", objectIDs);
  } catch (error) {
    return console.error("\n[ALGOLIA]🚨 Error updating record Index: ", error);
  }
};
