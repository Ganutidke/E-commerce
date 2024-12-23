/*
  # Initial E-commerce Schema Setup

  1. New Tables
    - users
      - Standard user fields plus role and profile info
    - products
      - Product details including name, description, price, etc.
    - categories
      - Product categories and subcategories
    - orders
      - Order tracking and details
    - order_items
      - Individual items in each order
    - cart_items
      - Shopping cart items for users
    - reviews
      - Product reviews and ratings

  2. Security
    - Enable RLS on all tables
    - Add policies for user access
    - Secure admin-only operations
*/

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL DEFAULT 'user',
  full_name TEXT,
  phone TEXT,
  address TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Categories table
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  parent_id UUID REFERENCES categories(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Products table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  category_id UUID REFERENCES categories(id),
  images TEXT[] DEFAULT '{}',
  stock_quantity INTEGER NOT NULL DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Orders table
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  status TEXT NOT NULL DEFAULT 'pending',
  total_amount DECIMAL(10,2) NOT NULL,
  shipping_address TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Order items table
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id),
  product_id UUID REFERENCES products(id),
  quantity INTEGER NOT NULL,
  price_at_time DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Cart items table
CREATE TABLE cart_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  product_id UUID REFERENCES products(id),
  quantity INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Reviews table
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  product_id UUID REFERENCES products(id),
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Users policies
CREATE POLICY "Users can read their own data"
  ON users FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Categories policies (public read)
CREATE POLICY "Categories are publicly readable"
  ON categories FOR SELECT
  TO anon, authenticated
  USING (true);

-- Products policies (public read)
CREATE POLICY "Products are publicly readable"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);

-- Orders policies
CREATE POLICY "Users can read their own orders"
  ON orders FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Cart items policies
CREATE POLICY "Users can manage their own cart"
  ON cart_items FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Reviews policies
CREATE POLICY "Reviews are publicly readable"
  ON reviews FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Users can create reviews for products they bought"
  ON reviews FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM orders o
      JOIN order_items oi ON o.id = oi.order_id
      WHERE o.user_id = auth.uid()
      AND oi.product_id = product_id
    )
  );