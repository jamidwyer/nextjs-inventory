// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: 1,
    first_name: 'jami',
    email: 'jami@example.com',
    password: '123456',
  },
];

const products = [
  {
    id: 1,
    name: 'Black Beans',
  },
  {
    id: 2,
    name: 'Potato',
  },
  {
    id: 3,
    name: 'Wheat Thins',
  },
  {
    id: 4,
    name: 'Corn Tortillas',
  },
  {
    id: 5,
    name: 'Cheddar Cheese',
  },
  {
    id: 6,
    name: 'Ricotta Cheese',
  },
  {
    id: 7,
    name: 'Mozzarella Cheese',
  },
  {
    id: 8,
    name: 'Tofu',
  },
  {
    id: 9,
    name: 'Egg',
  },
  {
    id: 10,
    name: 'Marinara Sauce',
  },
  {
    id: 11,
    name: 'Tomato',
  },
  {
    id: 12,
    name: 'Jumbo Shells',
  },
  {
    id: 13,
    name: 'Parmesan Cheese',
  },
];

const quantitative_units = [
  {
    id: 1,
    name: 'Can',
  },
  {
    id: 2,
    name: 'Bag',
  },
  {
    id: 3,
    name: 'Each',
  },
  {
    id: 4,
    name: 'Box',
  },
  {
    id: 5,
    name: 'Container',
  },
  {
    id: 6,
    name: 'Jar',
  },
  {
    id: 7,
    name: 'Bottle',
  },
];

const inventory_items = [
  {
    product_id: products[5].id,
    user_id: users[0].id,
    amount: 1,
    quantitative_unit_id: quantitative_units[4].id,
    expiration_date: '2024-6-14',
  },
  {
    product_id: products[0].id,
    user_id: users[0].id,
    amount: 10,
    quantitative_unit_id: quantitative_units[0].id,
    expiration_date: '2025-12-06',
  },
  {
    product_id: products[1].id,
    user_id: users[0].id,
    amount: 10,
    quantitative_unit_id: quantitative_units[2].id,
    expiration_date: '2024-6-14',
  },
];

const recipes = [
  {
    id: 1,
    name: 'Stuffed Shells',
    ingredients: [
      { ingredient_id: products[5].id, order: 1 },
      { ingredient_id: products[8].id, order: 2 },
      { ingredient_id: products[9].id, order: 3 },
      { ingredient_id: products[11].id, order: 4 },
      { ingredient_id: products[12].id, order: 5 },
    ],
    added_by: users[0].id,
    source: 'jocooks.com',
    instructions:
      'Preheat oven to 400 F. Cook noodles. Combine ricotta, egg, and parmesan. Layer 9x11 pan with marinara sauce. Stuff shells. Put shells face up in a layer on top of the marinara layer. Add a layer of marinara over the shells. Bake for 25 minutes.',
  },
];

module.exports = {
  users,
  inventory_items,
  quantitative_units,
  products,
  recipes,
};
