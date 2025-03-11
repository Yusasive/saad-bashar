import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await connectDB();
  try {
    const body = await req.json();

    if (
      !body.title ||
      !body.categories ||
      !body.year ||
      !body.image ||
      !body.description
    ) {
      console.error("Validation error: Missing required fields", body);
      return NextResponse.json(
        { error: "All required fields must be provided" },
        { status: 400 }
      );
    }

    const newPost = await Post.create(body);
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectDB();
  try {
    const posts = await Post.find();
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
