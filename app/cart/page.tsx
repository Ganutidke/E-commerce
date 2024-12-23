"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart";
import { useState } from "react";

export default function CartPage() {
    const { items, removeItem, updateQuantity } = useCart();
    const [notification, setNotification] = useState<string | null>(null);

    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const handleCheckout = () => {
        setNotification("Checkout functionality coming soon!");
        setTimeout(() => setNotification(null), 3000);
    };

    if (items.length === 0) {
        return (
            <div className="max-w-4xl mx-auto p-8 text-center">
                <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
                <p>Your cart is empty</p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
            {notification && (
                <div className="mb-4 text-green-600 font-semibold">
                    {notification}
                </div>
            )}
            <div className="space-y-8">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center space-x-4 border-b pb-4"
                    >
                        <div className="relative w-24 h-24">
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover rounded"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">
                                ${item.price}
                            </p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            >
                                -
                            </Button>
                            <span>{item.quantity}</span>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                                +
                            </Button>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                ))}
                <div className="flex justify-between items-center pt-4">
                    <p className="text-lg font-semibold">Total: ${total.toFixed(2)}</p>
                    <Button onClick={handleCheckout}>Checkout</Button>
                </div>
            </div>
        </div>
    );
}
