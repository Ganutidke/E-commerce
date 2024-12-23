"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Checkbox } from "./ui/checkbox";

const filters = {
  category: [
    { id: "dresses", label: "Dresses" },
    { id: "tops", label: "Tops" },
    { id: "accessories", label: "Accessories" },
  ],
  size: [
    { id: "xs", label: "XS" },
    { id: "s", label: "S" },
    { id: "m", label: "M" },
    { id: "l", label: "L" },
    { id: "xl", label: "XL" },
  ],
  color: [
    { id: "black", label: "Black" },
    { id: "white", label: "White" },
    { id: "blue", label: "Blue" },
    { id: "red", label: "Red" },
    { id: "green", label: "Green" },
  ],
};

export function ProductFilters() {
  return (
    <form>
      <h2 className="font-semibold mb-4">Filters</h2>
      <Accordion type="multiple" className="space-y-4">
        <AccordionItem value="category">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {filters.category.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox id={option.id} />
                  <label htmlFor={option.id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="size">
          <AccordionTrigger>Size</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {filters.size.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox id={option.id} />
                  <label htmlFor={option.id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="color">
          <AccordionTrigger>Color</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {filters.color.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox id={option.id} />
                  <label htmlFor={option.id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </form>
  );
}