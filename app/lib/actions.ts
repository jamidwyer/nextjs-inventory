'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  id: z.string(),
  userId: z.string(),
  amount: z.coerce.number(),
  productId: z.string(),
  unit: z.string(),
  expirationDate: z.string(),
});

const CreateInventoryItem = FormSchema.omit({ id: true });

export async function createInventoryItem(formData: FormData) {
  const { userId, amount, productId, unit, expirationDate } =
    CreateInventoryItem.parse({
      userId: formData.get('userId'),
      productId: formData.get('productId'),
      amount: formData.get('amount'),
      unit: formData.get('unit'),
      expirationDate: formData.get('expirationDate'),
    });

  await sql`
    INSERT INTO inventory_items (user_id, amount, product_id, expiration_date, quantitative_unit_id)
    VALUES (${userId}, ${amount}, ${productId}, ${expirationDate}, ${unit})
  `;

  revalidatePath('/');
  redirect('/');
}
