export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock_quantity: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}