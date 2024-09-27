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
  recipes,
};
