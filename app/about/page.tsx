import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">Our Story</h1>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Mytalorzone By Sahiba was born from a passion for creating unique,
                handcrafted clothing that celebrates individuality and artisanal
                craftsmanship.
              </p>
              <p>
                Founded in 2020, we've dedicated ourselves to bringing together
                traditional techniques with contemporary design, creating pieces
                that are both timeless and modern.
              </p>
              <p>
                Each garment is carefully crafted with attention to detail,
                ensuring both quality and sustainability in our production
                process.
              </p>
            </div>
          </div>
          <div className="relative h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2"
              alt="About Us"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mb-4">
                  <value.icon className="h-8 w-8 mx-auto text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { Heart, Leaf, Sparkles } from "lucide-react";

const values = [
  {
    title: "Handcrafted with Love",
    description: "Each piece is made with care and attention to detail, ensuring quality in every stitch.",
    icon: Heart,
  },
  {
    title: "Sustainable Fashion",
    description: "We're committed to using eco-friendly materials and sustainable practices.",
    icon: Leaf,
  },
  {
    title: "Unique Designs",
    description: "Every piece is designed to be unique, helping you express your individual style.",
    icon: Sparkles,
  },
];