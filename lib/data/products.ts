// import { Product } from '../types/product';
// import { categories } from './categories';

// const sizeOptions = {
//   Dresses: ["S", "M", "L", "XL", "XXL"],
//   Tops: ["S", "M", "L", "XL", "XXL"],
//   Bottoms: ["S", "M", "L", "XL"],
//   Accessories: ["One Size"],
//   Outerwear: ["S", "M", "L", "XL", "XXL"],
//   Necklaces: ["One Size"],
// };

// export const products: Product[] = Array.from({ length: 100 }, (_, i) => {
//   const category = categories[Math.floor(Math.random() * categories.length)];
//   const categoryName = category.name;
//   const size = sizeOptions[categoryName as keyof typeof sizeOptions]  || ["One Size"];
//   return {
//     id: i + 1,
//     name: `Product ${i + 1}`,
//     slug: `product-${i + 1}`,
//     price: Math.floor(Math.random() * 200) + 50,
//     description: `This is a detailed description for Product ${i + 1}. It features high-quality materials and craftsmanship.`,
//     image: `https://4ddig.tenorshare.com/images/photo-recovery/images-not-found.jpg`,
//     category: categoryName,
//     stock_quantity: Math.floor(Math.random() * 50),
//     sizes: size,
//   };
// });


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

// Array of provided image URLs
const imageUrls = [
  "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?cs=srgb&dl=pexels-anne-363161-985635.jpg&fm=jpg",
  "https://t3.ftcdn.net/jpg/04/27/70/68/360_F_427706863_hi4N85labo3pmSc7AF3Dv4x3uAi2p8tM.jpg",
  "https://images.meesho.com/images/products/217848249/a0jj6_1200.jpg",
  "https://images.meesho.com/images/products/399022460/iq2um_1200.jpg",
  "https://images.meesho.com/images/products/467662362/2arcz_1200.jpg",
  "https://images.meesho.com/images/products/466433985/bqpxx_1200.jpg",
  "https://images.meesho.com/images/products/119428913/c2cqb_1200.jpg",
  "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRkGFSBT8oKJRGy14woxHAi0gE9xWUnZKtyBeOtJ4YhMPLNWTmyQ5C4Hn7LI-FCOx5bFu8i5SKDjpQGtf40KyrWdWL-02TwCQ-SyAiWFQEE"
];

// Function to get an image from the array, looping through images repeatedly
const getImage = (index: number) => imageUrls[index % imageUrls.length];

export const products: Product[] = Array.from({ length: 100 }, (_, i) => {
  const category = categories[Math.floor(Math.random() * categories.length)];
  const categoryName = category.name;
  const size = sizeOptions[categoryName as keyof typeof sizeOptions] || ["One Size"];

  return {
    id: i + 1,
    name: `Product ${i + 1}`,
    slug: `product-${i + 1}`,
    price: Math.floor(Math.random() * 200) + 50,
    description: `This is a detailed description for Product ${i + 1}. It features high-quality materials and craftsmanship.`,
    image: getImage(i),  // Cycles through images repeatedly
    category: categoryName,
    stock_quantity: Math.floor(Math.random() * 50),
    sizes: size,
  };
});
