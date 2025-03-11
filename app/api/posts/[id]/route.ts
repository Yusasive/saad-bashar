import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();
  try {
    const post = await Post.findById(params.id);
    if (!post)
      return NextResponse.json({ error: "Post not found" }, { status: 404 });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error fetching post" }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();
  const { id } = params;
  const updatedData = await req.json();

  try {
    const updatedPost = await Post.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedPost) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(updatedPost);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 }
    );
  }
}


export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } } 
) {
  await connectDB();

  try {
    const { id } = params; 

    if (!id) {
      return NextResponse.json(
        { error: "Post ID is required" },
        { status: 400 }
      );
    }

    const deletedPost = await Post.findByIdAndDelete(id);

    if (!deletedPost) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Post deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
