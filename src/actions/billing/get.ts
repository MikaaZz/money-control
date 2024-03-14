'use server';

import { prisma } from '@/lib/prisma';

export async function getUserBills(/*userId: string*/) {
  try {
    const bills = await prisma.billyng.findMany({
      // where: { userId: userId },
      include: {
        category: true,
      },
    });
    return bills;
  } catch (e) {
    throw Error(`Error in getUserbills: ${e}`);
  }
}

export async function getBill(id: string) {
  try {
    const bill = await prisma.billyng.findUnique({ where: { id: id } });
    return bill;
  } catch (e) {
    throw Error(`Error in getbill: ${e}`);
  }
}
