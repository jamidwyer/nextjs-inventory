// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    first_name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    first_name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    first_name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    first_name: 'Hector Simpson',
    email: 'hector@simpson.com',
    image_url: '/customers/hector-simpson.png',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    first_name: 'Steven Tey',
    email: 'steven@tey.com',
    image_url: '/customers/steven-tey.png',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    first_name: 'Steph Dietz',
    email: 'steph@dietz.com',
    image_url: '/customers/steph-dietz.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    first_name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    first_name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    first_name: 'Emil Kowalski',
    email: 'emil@kowalski.com',
    image_url: '/customers/emil-kowalski.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    first_name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    first_name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
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
    name: 'Pickles',
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
]

const inventory_items = [
  {
    product_id: products[5].id,
    user_id: users[0].id, amount: 1, quantitative_unit_id: quantitative_units[4].id, expiration_date: '2024-6-14',

  },
  {
    product_id: products[6].id,
    user_id: users[0].id, amount: 1, quantitative_unit_id: quantitative_units[5].id, expiration_date: '2024-7-14',

  },
  {
    product_id: products[0].id,
    user_id: users[0].id, amount: 10, quantitative_unit_id: quantitative_units[0].id, expiration_date: '2025-12-06',
  },
  {
    product_id: products[1].id,
    user_id: users[0].id, amount: 10, quantitative_unit_id: quantitative_units[2].id, expiration_date: '2024-6-14',

  },
];

module.exports = {
  users,
  inventory_items,
  quantitative_units,
  products,
};
