import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db.js";

// POST - Save user
export async function POST(req) {
  try {
    const { firstName, lastName } = await req.json();
    const db = await connectDB();

    await db.execute("INSERT INTO users (first_name, last_name) VALUES (?, ?)", [firstName, lastName]);
    await db.end();

    return NextResponse.json({ message: "User saved successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error saving user:", error);
    return NextResponse.json({ error: "Failed to save user" }, { status: 500 });
  }
}