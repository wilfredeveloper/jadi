"use server";

import path from "path";
import { writeFile } from "fs/promises";
import { PostFile } from "../services/upload";

export async function uploadNote(
  formData: FormData
) {
  const file = formData.get("file") as File;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const tags = formData.get("tags") as string;
  const category = formData.get("category") as string;

  console.log({ file, title, description, tags, category })

  if (!file) {
    console.log("\n 🚨---> [ from api/upload/route.ts ] No files received.\n");
    return { message: "No files received." };
  }

  if (!title || !description || !tags || !category) {
    console.log("One or more required fields are missing");
    return;
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = file.name.replaceAll(" ", "_");

  try {
    await writeFile(
      path.join(process.cwd(), "public/assets/" + filename),
      buffer
    );

    console.log("\n 🪵--> Trying to use PostFile function\n");
    await PostFile(file, tags, description, category, title);

    console.log(
      "\n 👍--> [ from api/upload/route.ts ] File uploaded successfully\n"
    );

    return { message: "Success" };
  } catch (error) {
    console.log(
      "\n 🚨---> [ from api/upload/route.ts ] An error occured during upload\n",
      error,
      "\n"
    );
    return { message: "Failed" };
  }
}
