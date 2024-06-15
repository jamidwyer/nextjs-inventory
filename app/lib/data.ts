import { sql } from '@vercel/postgres';
import {
  InventoryItem,
  Product,
  User,
} from './definitions';

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredInventoryItems(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const inventoryItems = await sql<InventoryItem>`
      SELECT
        inventory_items.id,
        inventory_items.amount,
        inventory_items.date,
        users.first_name,
      FROM inventory_items
      JOIN users ON inventory_items.user_id = users.id
      WHERE
        products.name ILIKE ${`%${query}%`} OR
      ORDER BY inventory_items.expiration_date ASC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return inventoryItems.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch inventory items.');
  }
}

export async function fetchProductById(id: string) {
  try {
    const data = await sql<Product>`
      SELECT
        products.id,
        products.name,
      FROM products
      WHERE products.id = ${id};
    `;

    const product = data.rows.map((product) => ({
      ...product,
    }));

    return product[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch product.');
  }
}

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
