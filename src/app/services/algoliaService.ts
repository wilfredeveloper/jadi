import index from "../config/algolia-client";

interface Data {
  url: string;
  size: number | null;
  name: string | null;
  mimeType: string | null;
  extension: string | null;
  cms_id: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  noteTitle: string;
  Tags: string[];
  category: string;
  description: string;
  upvotes: any[];
  views: number;
  popularity: number;
  saves: any[];
  likes: any[];
}

export const saveToAlgolia = async (data: Data) => {
  try {
        const { objectIDs } = await index
            .saveObjects([data], { autoGenerateObjectIDIfNotExist: true });
        return console.log("\n[ALGOLIA]🎉 RUpdated record Index", objectIDs);
    } catch (error) {
        return console.error("\n[ALGOLIA]🚨 Error updating record Index: ", error);
    }
};
