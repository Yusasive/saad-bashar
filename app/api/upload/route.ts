import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as Blob | null;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const base64String = `data:${file.type};base64,${buffer.toString("base64")}`;

  try {
    const uploadResponse = await cloudinary.uploader.upload(base64String, {
      folder: "blog-images",
      resource_type: "auto",
    });

    return NextResponse.json({ url: uploadResponse.secure_url });
  } catch (error) {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
