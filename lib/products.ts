// Static product data
export const products = Array.from({ length: 100 }, (_, i) => ({
  id: `prod_${i + 1}`,
  name: `Product ${i + 1}`,
  slug: `product-${i + 1}`,
  price: Math.floor(Math.random() * 200) + 50,
  description: `This is a detailed description for Product ${i + 1}. It features high-quality materials and craftsmanship.`,
  image: `https://source.unsplash.com/800x800/?fashion&sig=${i}`,
  category: categories[Math.floor(Math.random() * categories.length)].name,
  stock_quantity: Math.floor(Math.random() * 50),
}));

export const categories = [
  { id: 'cat_1', name: 'Dresses', slug: 'dresses' },
  { id: 'cat_2', name: 'Tops', slug: 'tops' },
  { id: 'cat_3', name: 'Bottoms', slug: 'bottoms' },
  { id: 'cat_4', name: 'Accessories', slug: 'accessories' },
  { id: 'cat_5', name: 'Outerwear', slug: 'outerwear' },
];