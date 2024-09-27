import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  id: z.coerce.number(),
  userId: z.coerce.number(),
  amount: z.coerce.number({
    invalid_type_error: 'Please enter a whole number.',
  }),
  productId: z.coerce.number({
    invalid_type_error: 'Please select a product.',
  }),
  unit: z.string(),
  expirationDate: z.string(),
});

export type State = {
  errors?: {
    userId?: string[];
    amount?: string[];
    productId?: string[];
    unit?: string[];
    expirationDate?: string[];
  };
  message?: string | null;
};

export async function deleteInventoryItem(id: number) {
  try {
    await sql`
    delete from inventory_items
    where id=${id};
  `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to delete inventory item.',
    };
  }
  revalidatePath('/');
  redirect('/');
}
