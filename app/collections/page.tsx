import { ProductCard } from "@/components/product-card";
import { categories } from "@/lib/data/categories";
import { products } from "@/lib/data/products";
import { Product } from "@/lib/types/product";


interface Collection {
  id: string;
  name: string;
  products: Product[];
}

async function getCollections() {
  const collections = categories.map((category) => ({
    id: category.id,
    name: category.name,
    products: products.filter((product) => product.category === category.name),
  }));
  return collections as Collection[];
}

export default async function CollectionsPage() {
  const collections = await getCollections();

  return (
      <div className="bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {collections.map((collection) => (
              <div key={collection.id} className="mb-12">
                <h2 className="text-3xl font-bold mb-8">{collection.name}</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {collection.products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
          ))}
        </div>
      </div>
  );
}
