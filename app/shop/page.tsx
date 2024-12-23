import { products } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";
import { ProductCard } from "@/components/product-card";
import { ProductFilters } from "@/components/product-filters";
import { ProductSort } from "@/components/product-sort";

export default function ShopPage() {
  return (
      <div className="bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-baseline justify-between border-b pb-6">
            <h1 className="text-3xl font-bold tracking-tight">Shop All</h1>
            <div className="flex items-center">
              <ProductSort />
            </div>
          </div>

          <div className="flex gap-x-8 py-6">
            <div className="w-64 shrink-0 hidden lg:block">
              {/* Pass categories prop here */}
              <ProductFilters categories={categories} />
            </div>

            <div className="flex-1">
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
