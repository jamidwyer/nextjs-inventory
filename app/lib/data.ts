import { sql } from '@vercel/postgres';
import { InventoryItem, Product, User } from './definitions';

export async function fetchInventoryItems(userId) {
  try {
    //    const data = await sql<InventoryItem>`SELECT inventory_items.product_id, inventory_items.exipration_date, products.name FROM inventory_items INNER JOIN products on products.product_id=inventory_items.product_id`;
    //    const data = await sql<InventoryItem>`SELECT inventory_items.product_id, inventory_items.amount, inventory_items.exipration_date products.name FROM inventory_items JOIN products ON inventory_items.product_id=products.product_id`;
    const data = await sql<InventoryItem>`SELECT *
    FROM inventory_items, products
    WHERE product_id = product_id AND user_id = ${userId};`;

    console.log(data.rows);

    return data.rows;
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
