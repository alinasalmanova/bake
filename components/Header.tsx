"use client";

import { useLanguage } from "@/components/LanguageContext";
import Link from "next/link";
import { CartIcon } from "@/components/cart/CartIcon";

export default function Header() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div />
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLocale}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
          >
            {locale === "ru" ? "KZ" : "RU"}
          </button>
          <CartIcon />
        </div>
      </div>
    </header>
  );
}
