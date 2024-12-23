"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function ProductSort() {
  return (
    <Select defaultValue="featured">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort By" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="featured">Featured</SelectItem>
        <SelectItem value="price-low">Price: Low to High</SelectItem>
        <SelectItem value="price-high">Price: High to Low</SelectItem>
        <SelectItem value="newest">Newest</SelectItem>
      </SelectContent>
    </Select>
  );
}