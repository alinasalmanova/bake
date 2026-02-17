"use client";

import { ReactNode } from "react";
import { CartProvider } from "./cart/CartContext";
import { LanguageProvider } from "./LanguageContext";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <CartProvider>{children}</CartProvider>
    </LanguageProvider>
  );
}
