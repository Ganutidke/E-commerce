import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "./ui/card";

interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group">
      <Link href={`/shop/${product.slug}`}>
        <CardContent className="p-0">
          <div className="aspect-square relative overflow-hidden rounded-t-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
        </CardContent>
        <CardFooter className="p-4">
          <div>
            <p className="text-sm text-muted-foreground">{product.category}</p>
            <h3 className="font-semibold mt-1">{product.name}</h3>
            <p className="text-sm font-medium mt-1">${product.price}</p>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}