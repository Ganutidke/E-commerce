import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Handcrafted with Love
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Discover our exclusive collection of handmade clothing
            </p>
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
              <Link href="/shop">
                Shop Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/shop/${category.slug}`}
                className="group relative h-96 overflow-hidden rounded-lg"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.name}
                href={`/shop/${product.slug}`}
                className="group"
              >
                <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground">${product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Mytalorzone By Sahiba was born from a passion for creating unique,
                handcrafted clothing that celebrates individuality and artisanal
                craftsmanship. Each piece is carefully made with attention to detail
                and quality.
              </p>
              <Button asChild variant="outline">
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2"
                alt="About Us"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const categories = [
  {
    name: "Dresses",
    slug: "dresses",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
  },
  {
    name: "Tops",
    slug: "tops",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
  },
  {
    name: "Accessories",
    slug: "accessories",
    image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d",
  },
];

const featuredProducts = [
  {
    name: "Floral Summer Dress",
    slug: "dresses",
    price: "129.99",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1",
  },
  {
    name: "Casual Linen Top",
    slug: "tops",
    price: "79.99",
    image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153",
  },
  {
    name: "Bohemian Maxi Dress",
    slug: "dresses",
    price: "149.99",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
  },
  {
    name: "Handcrafted Necklace",
    slug: "necklace",
    price: "49.99",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908",
  },
];