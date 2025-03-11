import { NextResponse } from "next/server";

const DEFAULT_USER = {
  email: "admin@example.com",
  password: "password123",
};

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === DEFAULT_USER.email && password === DEFAULT_USER.password) {
    const response = NextResponse.json(
      { message: "Login successful" },
      { status: 200 }
    );

    
    response.cookies.set("loggedIn", "true", {
      httpOnly: true,
      path: "/",
      maxAge: 3600, 
    });

    return response;
  } else {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
}
