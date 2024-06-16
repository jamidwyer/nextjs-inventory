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
    password: '123456',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    first_name: 'Lee Robinson',
    email: 'lee@robinson.com',
    password: '123456',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    first_name: 'Hector Simpson',
    email: 'hector@simpson.com',
    password: '123456',
    image_url: '/customers/hector-simpson.png',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    first_name: 'Steven Tey',
    email: 'steven@tey.com',
    password: '123456',
    image_url: '/customers/steven-tey.png',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    first_name: 'Steph Dietz',
    email: 'steph@dietz.com',
    password: '123456',
    image_url: '/customers/steph-dietz.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    first_name: 'Michael Novotny',
    email: 'michael@novotny.com',
    password: '123456',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    first_name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    password: '123456',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    first_name: 'Emil Kowalski',
    password: '123456',
    email: 'emil@kowalski.com',
    image_url: '/customers/emil-kowalski.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    first_name: 'Amy Burns',
    email: 'amy@burns.com',
    password: '123456',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    first_name: 'Balazs Orban',
    email: 'balazs@orban.com',
    password: '123456',
    image_url: '/customers/balazs-orban.png',
  },
];

const products = [
  {
    id: '427e95f3-d711-4854-ac94-a55fdf2fb6b6',
    name: 'Black Beans',
  },
  {
    id: '5178b06e-1b30-4c35-8675-f24a0e14e6dc',
    name: 'Potato',
  },
  {
    id: 'a7987b86-e8c4-4706-b3f8-241697a7d9a6',
    name: 'Wheat Thins',
  },
  {
    id: '001dc1b6-dd66-4858-959c-225b890e0d02',
    name: 'Corn Tortillas',
  },
  {
    id: '5c84eb30-a891-4a41-b17c-01df37afc324',
    name: 'Cheddar Cheese',
  },
  {
    id: '25266e23-15c3-40b7-a38c-b60673d0da2b',
    name: 'Ricotta Cheese',
  },
];

const quantitative_units = [
  {
    id: '2117e06b-20c4-4a66-9015-606fbc0a039e',
    name: 'Can',
  },
  {
    id: '6de0cbfb-1ead-4988-a1c6-9f26452beb50',
    name: 'Bag',
  },
  {
    id: 'aa40e42c-b0d4-4360-9dba-21327bf4aa6c',
    name: 'Each',
  },
  {
    id: '12a6e48b-db1c-4c93-816a-fab9e3e4ea0d',
    name: 'Box',
  },
  {
    id: 'd1378490-35f7-407e-bb72-3cf60c3bb45c',
    name: 'Container',
  },
  {
    id: 'b600439e-2ca0-476c-acdc-dcc1572eccaa',
    name: 'Jar',
  },
  {
    id: '6d601591-e6b5-4d2e-af1d-8b0579eb3f15',
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

module.exports = {
  users,
  inventory_items,
  quantitative_units,
  products,
};
