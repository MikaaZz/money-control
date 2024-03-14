import { prisma } from '@/lib/prisma';
import { Billyng } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const homes: Billyng[] = await prisma.billyng.findMany();
  return NextResponse.json(homes);
}

export async function POST(request: NextRequest) {
  try {
    const response = await request.json();

    const registerBill = await prisma.billyng.create({
      data: { ...response },
    });

    return NextResponse.json(registerBill);
  } catch (e) {
    throw Error(`Error in create a home API: ${e}`);
  }
}
