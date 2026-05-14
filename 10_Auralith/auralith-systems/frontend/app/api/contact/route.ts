import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      company,
      service,
      details,
    } = body;

    if (
      !name?.trim() ||
      !email?.trim() ||
      !company?.trim() ||
      !details?.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    const consultationRequest = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      name,
      email,
      company,
      service,
      details,
    };

    console.log("\n");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("NEW AURALITH CONSULTATION");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log(consultationRequest);
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("\n");

    return NextResponse.json(
      {
        success: true,
        message: "Consultation request received.",
        submission: consultationRequest,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error.",
      },
      { status: 500 }
    );
  }
}