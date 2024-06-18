export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

export type InventoryItem = {
  id: number;
  name: string;
  user_id: number;
  product_id: number;
  quantitative_unit_id: number;
  amount: number;
  expiration_date: string;
};

export type Product = {
  id: number;
  name: string;
};
