import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

export const POST = async (req: Request, res: Response) => {
  const formData = await req.formData();

  const file = formData.get("file") as File;
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename =  file.name.replaceAll(" ", "_");

  try {
    await writeFile(
      path.join(process.cwd(), "public/assets/" + filename),
      buffer
    );

    console.log("\n 👍--> [ from api/upload/route.ts ] File uploaded successfully\n")
    return NextResponse.json({ Message: "Success", status: 201 });
} catch (error) {
    console.log("\n 🚨---> [ from api/upload/route.ts ] An error occured during upload\n", error, "\n")
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};