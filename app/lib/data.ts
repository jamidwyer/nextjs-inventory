import { sql } from '@vercel/postgres';
import { InventoryItem, Product, User } from './definitions';

const ITEMS_PER_PAGE = 20;

export async function fetchInventoryItems(
  userId: string,
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const data = await sql<InventoryItem>`SELECT *
    FROM inventory_items, products
    WHERE product_id = product_id AND user_id = ${userId} AND
    name ILIKE ${`%${query}%`}
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
;`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch inventory items.');
  }
}

export async function fetchInventoryItemsPages(
  userId: string,
  query: string,
  currentPage: number,
) {
  try {
    const count = await sql`SELECT COUNT(*)
    FROM inventory_items, products
    WHERE product_id = product_id AND user_id = ${userId} AND
    name ILIKE ${`%${query}%`};`;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of inventory items.');
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
