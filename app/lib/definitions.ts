export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

export type InventoryItem = {
  id: string;
  name: string;
  user_id: string;
  product_id: string;
  quantitative_unit_id: string;
  amount: number;
  expiration_date: string;
};

export type Product = {
  id: string;
  name: string;
};
