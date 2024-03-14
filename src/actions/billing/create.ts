'use server';

import { Prisma } from '@prisma/client';

export async function createBill(bill: Prisma.BillyngCreateInput) {
  try {
    const response = await fetch('http://localhost:3000/api/billyng', {
      method: 'POST',
      body: JSON.stringify(bill),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  } catch (e) {
    throw new Error(`Error in create bill: ${e}`);
  }
}
