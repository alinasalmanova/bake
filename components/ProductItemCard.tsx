"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/CartContext";

interface Props {
  id: string;
  title: string;
  image: string;
  price: number;
}

export function ProductItemCard({ id, title, image, price }: Props) {
  const { addToCart, removeFromCart, items } = useCart();

  const cartItem = items.find((i) => i.id === id);
  const quantity = cartItem?.quantity ?? 0;

  return (
    <Card className="rounded-3xl flex flex-col">
      <img src={image} alt={title} className="h-56 object-cover rounded-t-3xl" />

      <CardContent className="flex flex-col items-center gap-4 pt-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-lg">{price} ₸</span>

        {quantity === 0 ? (
          <Button onClick={() => addToCart({ id, title, image, price })}>
            Добавить
          </Button>
        ) : (
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={() => removeFromCart(id)}>
              −
            </Button>
            <span className="font-semibold">{quantity}</span>
            <Button onClick={() => addToCart({ id, title, image, price })}>
              +
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
