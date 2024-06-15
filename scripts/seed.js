const { db } = require('@vercel/postgres');
const {
  inventoryItems,
  users,
  quantitative_units,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
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
        ON CONFLICT (id) DO NOTHING;
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
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS inventory_items (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID NOT NULL,
    amount INT NOT NULL,
    exipration_date DATE,
    product_id UUID NOT NULL,
    quantitative_unit_id UUID NOT NULL,
  );
`;

    console.log(`Created "inventoryItems" table`);

    const insertedInventoryItems = await Promise.all(
      inventory_items.map(
        (inventory_item) => client.sql`
        INSERT INTO inventory_items (user_id, amount, status, date, product_id, quantitative_unit_id)
        VALUES (${inventory_item.user_id}, ${inventory_item.amount}, ${inventory_item.expiration_date}, ${inventory_item.product_id}, ${inventory_item.quantitative_unit_id})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
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
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS products (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
      );
    `;

    console.log(`Created "products" table`);

    const insertedProducts = await Promise.all(
      products.map(
        (product) => client.sql`
        INSERT INTO products (id, name)
        VALUES (${product.id}, ${product.name})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
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
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(50) NOT NULL UNIQUE,
      );
    `;

    console.log(`Created "quantitative_units" table`);

    const insertedQuantitativeUnits = await Promise.all(
      quantitative_units.map(
        (unit) => client.sql`
        INSERT INTO quantitative_units (id, name)
        VALUES (${unit.id}, ${unit.name})
        ON CONFLICT (name) DO NOTHING;
      `,
      ),
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

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedProducts(client);
  await seedInventoryItems(client);
  await seedQuantitativeUnits(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
