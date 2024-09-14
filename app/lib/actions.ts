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

const CreateInventoryItem = FormSchema.omit({ id: true });

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

export async function createInventoryItem(
  prevState: State,
  formData: FormData,
) {
  const validatedFields = CreateInventoryItem.safeParse({
    userId: formData.get('userId'),
    productId: formData.get('productId'),
    amount: formData.get('amount'),
    unit: formData.get('unit'),
    expirationDate: formData.get('expirationDate'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }
  const { userId, amount, productId, expirationDate, unit } =
    validatedFields.data;

  try {
    await sql`
    INSERT INTO inventory_items (user_id, amount, product_id, expiration_date, quantitative_unit_id)
    VALUES (${userId}, ${amount}, ${productId}, ${expirationDate}, ${unit})
  `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to add inventory item.',
    };
  }

  revalidatePath('/');
  redirect('/');
}

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
