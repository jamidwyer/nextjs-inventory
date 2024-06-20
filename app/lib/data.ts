import { sql } from '@vercel/postgres';
import { InventoryItem, Product, User } from './definitions';

const ITEMS_PER_PAGE = 20;

export async function fetchInventoryItems(
  userId: number,
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const data =
      await sql<InventoryItem>`SELECT i.id, i.expiration_date, p.name, i.amount, i.product_id
FROM inventory_items i
INNER JOIN products p
ON i.product_id = p.id
WHERE i.user_id = ${userId} AND
p.name ILIKE ${`%${query}%`}
ORDER BY i.expiration_date ASC
LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
;`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch inventory items.');
  }
}

export async function fetchInventoryItemsPages(
  userId: number,
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

export async function fetchProducts() {
  try {
    const products = await sql<Product>`
      SELECT *
      FROM products
    `;

    return products.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products.');
  }
}

export async function fetchRecipesByIngredient(id: number) {
  try {
    const data = await sql<Product>`SELECT
       *
      FROM recipes
      INNER JOIN recipes_to_ingredients
      ON recipes.id = recipes_to_ingredients.recipe_id
      WHERE recipes_to_ingredients.ingredient_id = ${id};`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch recipes.');
  }
}

export async function fetchRecipeById(id: number) {
  try {
    const recipe = await sql`select * from recipes_to_ingredients
    inner join recipes
    on recipes.id = recipes_to_ingredients.recipe_id
    inner join products
    on products.id = recipes_to_ingredients.ingredient_id
    where recipes.id= ${id}
;`;

    const recipeData = {
      ingredients: [],
      instructions: recipe.rows[0].instructions,
    };

    recipe.rows.map((row) => {
      // @ts-ignore # need to optimize query so this not needed
      recipeData.ingredients.push(row.name);
    });

    return recipeData;
  } catch (error) {
    console.error('Failed to fetch recipe:', error);
    throw new Error('Failed to fetch recipe.');
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
