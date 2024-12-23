import { Product } from '../types/product';
import { categories } from './categories';

const sizeOptions = {
  Dresses: ["S", "M", "L", "XL", "XXL"],
  Tops: ["S", "M", "L", "XL", "XXL"],
  Bottoms: ["S", "M", "L", "XL"],
  Accessories: ["One Size"],
  Outerwear: ["S", "M", "L", "XL", "XXL"],
  Necklaces: ["One Size"],
};

export const products: Product[] = Array.from({ length: 100 }, (_, i) => {
  const category = categories[Math.floor(Math.random() * categories.length)];
  const categoryName = category.name;
  const size = sizeOptions[categoryName] || ["One Size"];
  return {
    id: `prod_${i + 1}`,
    name: `Product ${i + 1}`,
    slug: `product-${i + 1}`,
    price: Math.floor(Math.random() * 200) + 50,
    description: `This is a detailed description for Product ${i + 1}. It features high-quality materials and craftsmanship.`,
    image: `https://4ddig.tenorshare.com/images/photo-recovery/images-not-found.jpg`,
    category: categoryName,
    stock_quantity: Math.floor(Math.random() * 50),
    sizes: size,
  };
});
