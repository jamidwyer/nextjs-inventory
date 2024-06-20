const { db } = require('@vercel/postgres');
const {
  inventory_items,
  products,
  users,
  quantitative_units,
  recipes,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id BIGSERIAL PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, first_name, email, password)
        VALUES (${user.id}, ${user.first_name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (email) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedInventoryItems(client) {
  try {
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS inventory_items (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGSERIAL NOT NULL,
    amount INT NOT NULL,
    expiration_date DATE,
    product_id BIGSERIAL NOT NULL,
    quantitative_unit_id SERIAL NOT NULL
  );
`;

    console.log(`Created "inventoryItems" table`);

    const insertedInventoryItems = await Promise.all(
      inventory_items.map((inventory_item) => {
        return client.sql`
        INSERT INTO inventory_items (user_id, amount, expiration_date, product_id, quantitative_unit_id)
        VALUES (${inventory_item.user_id}, ${inventory_item.amount}, ${inventory_item.expiration_date}, ${inventory_item.product_id}, ${inventory_item.quantitative_unit_id})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedInventoryItems.length} items`);

    return {
      createTable,
      inventoryItems: insertedInventoryItems,
    };
  } catch (error) {
    console.error('Error seeding inventoryItems:', error);
    throw error;
  }
}

async function seedProducts(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS products (
        id BIGSERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE
      );
    `;

    console.log(`Created "products" table`);

    const insertedProducts = await Promise.all(
      products.map((product) => {
        return client.sql`
        INSERT INTO products (id, name)
        VALUES (${product.id}, ${product.name})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedProducts.length} products`);

    return {
      createTable,
      products: insertedProducts,
    };
  } catch (error) {
    console.error('Error seeding products:', error);
    throw error;
  }
}

async function seedQuantitativeUnits(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS quantitative_units (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL UNIQUE
      );
    `;

    console.log(`Created "quantitative_units" table`);

    const insertedQuantitativeUnits = await Promise.all(
      quantitative_units.map((unit) => {
        return client.sql`
        INSERT INTO quantitative_units (id, name)
        VALUES (${unit.id}, ${unit.name})
        ON CONFLICT (name) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedQuantitativeUnits.length} units`);

    return {
      createTable,
      quantitativeUnits: insertedQuantitativeUnits,
    };
  } catch (error) {
    console.error('Error seeding units:', error);
    throw error;
  }
}

async function seedRecipes(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS recipes (
        id BIGSERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE,
        instructions VARCHAR(1000) NOT NULL
      );
    `;

    console.log(`Created "recipes" table`);

    const insertedRecipes = await Promise.all(
      recipes.map((recipe) => {
        return client.sql`
        INSERT INTO recipes (id, name, instructions)
        VALUES (${recipe.id}, ${recipe.name}, ${recipe.instructions})
        ON CONFLICT (name) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedRecipes.length} recipes`);

    return {
      createTable,
      recipes: insertedRecipes,
    };
  } catch (error) {
    console.error('Error seeding recipes:', error);
    throw error;
  }
}

async function seedRecipesToIngredients(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS recipes_to_ingredients (
        recipe_id INT NOT NULL,
        ingredient_id INT NOT NULL,
        ingredient_order INT
      );
    `;

    console.log(`Created "recipes to ingredients" table`);

    const insertedRecipeIngredients = await Promise.all(
      recipes.map((recipe) => {
        console.log(recipe);
        recipe.ingredients.map((ingredient) => {
          return client.sql`
        INSERT INTO recipes_to_ingredients (recipe_id, ingredient_id, ingredient_order)
        VALUES (${recipe.id}, ${ingredient.ingredient_id}, ${ingredient.order})
      `;
        });
      }),
    );

    console.log(
      `Seeded ${insertedRecipeIngredients.length} recipe ingredients`,
    );

    return {
      createTable,
      recipeIngredients: insertedRecipeIngredients,
    };
  } catch (error) {
    console.error('Error seeding recipe to ingredients:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  // await seedProducts(client);
  //  await seedQuantitativeUnits(client);
  // await seedInventoryItems(client);
  //await seedRecipes(client);
  //await seedRecipesToIngredients(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
