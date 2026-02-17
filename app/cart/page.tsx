"use client";

import { useCart } from "@/components/cart/CartContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CartPage() {
  const { items, addToCart, removeFromCart, clearCart } = useCart();

  const totalPrice = items.reduce(
    (acc, i) => acc + Number(i.price) * i.quantity,
    0
  );

  const message = items
    .map(
      (item) =>
        `${item.title} x${item.quantity} — ${(
          Number(item.price) * item.quantity
        ).toLocaleString()} ₸`
    )
    .join("%0A");

  const fullMessage = `Здравствуйте! Хочу заказать:%0A%0A${message}%0A%0AИтого: ${totalPrice.toLocaleString()} ₸`;

  const whatsappUrl = `https://wa.me/77070550588?text=${fullMessage}`;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Корзина</h1>

      {/* Единственная кнопка возврата */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm transition"
        >
          <span className="text-lg">←</span>
          На главную
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg">Корзина пуста</p>
        </div>
      ) : (
        <>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4 border-b pb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p>{item.price} ₸</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => removeFromCart(item.id)}
                >
                  −
                </Button>

                <span className="min-w-[24px] text-center">
                  {item.quantity}
                </span>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    addToCart({
                      id: item.id,
                      title: item.title,
                      price: item.price,
                      image: item.image,
                    })
                  }
                >
                  +
                </Button>
              </div>
            </div>
          ))}

          <p className="text-right font-semibold mt-8 text-lg">
            Итого: {totalPrice.toLocaleString()} ₸
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                size="lg"
                className="w-full rounded-xl bg-primary text-primary-foreground shadow-md hover:shadow-lg transition"
              >
                Оформить заказ
              </Button>
            </a>

            <Button
              variant="outline"
              size="lg"
              className="flex-1 rounded-xl"
              onClick={clearCart}
            >
              Очистить
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
