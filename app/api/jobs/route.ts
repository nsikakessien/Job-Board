import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.redirect(new URL("/auth/sign-in", request.url));
  }

  try {
    const body = await request.json();

    const job = await prisma.job.create({
      data: { ...body, postedById: session.user.id },
    });

    return NextResponse.json(
      { message: "Job posted successfully", data: job },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const jobs = await prisma.job.findMany({
      orderBy: { postedAt: "desc" },
      include: { postedBy: true },
    });

    return NextResponse.json(
      { message: "Jobs fetched successfully", data: jobs },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error fetching jobs:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
