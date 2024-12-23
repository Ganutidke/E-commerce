import { notFound } from "next/navigation";
import Image from "next/image";
import { products } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { ProductCard } from "@/components/product-card";

export function generateStaticParams() {
  const productSlugs = products.map((product) => ({
    slug: product.slug,
  }));

  const categorySlugs = categories.map((category) => ({
    slug: category.slug,
  }));

  return [...productSlugs, ...categorySlugs];
}

export default function ShopSlugPage({
                                       params,
                                     }: {
  params: { slug: string };
}) {
  const category = categories.find((c) => c.slug === params.slug);
  if (category) {
    const categoryProducts = products.filter((p) => p.category === category.name);
    return (
        <div className="bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold mb-8">{category.name}</h1>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {categoryProducts.length === 0 ? (
                  <p className="col-span-full text-center text-xl">
                    Sorry, no products available in this category at the moment.
                  </p>
              ) : (
                  categoryProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                  ))
              )}
            </div>
          </div>
        </div>
    );
  }

  const product = products.find((p) => p.slug === params.slug);
  console.log(product);
  if (!product) {
    return (
        <div className="bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold mb-4">
              Sorry, this product is not available this time.
            </h1>
            <p className="text-xl">
              We apologize for the inconvenience. The product you're looking for
              might have been removed or is temporarily unavailable.
            </p>
          </div>
        </div>
    );
  }

  return (
      <div className="bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative aspect-square">
              <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
              />
            </div>

            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-2xl font-semibold mt-4">${product.price}</p>
              <p className="text-muted-foreground mt-4">{product.description}</p>

              {/* Display available sizes */}
              <div className="mt-8">
                <h3 className="font-semibold mb-2">Available Sizes</h3>
                <div className="flex gap-4 flex-wrap">
                  {product.sizes.map((size) => (
                      <button
                          key={size}
                          className="px-4 py-2 text-sm font-medium border rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        {size}
                      </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold mb-2">Availability</h3>
                <p
                    className={
                      product.stock_quantity > 0
                          ? "text-green-600"
                          : "text-red-600"
                    }
                >
                  {product.stock_quantity > 0 ? "In Stock" : "Out of Stock"}
                </p>
              </div>

              <AddToCartButton
                  product={product}
                  disabled={product.stock_quantity === 0}
              />
            </div>
          </div>
        </div>
      </div>
  );
}
