export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock_quantity: number;
  sizes: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}