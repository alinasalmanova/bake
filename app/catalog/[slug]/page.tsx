import { prisma } from "@/lib/prisma";
import { ProductItemCard } from "@/components/ProductItemCard";
import Link from "next/link";
import type { Product, Category } from "@prisma/client";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CatalogPage({ params }: PageProps) {
  const { slug } = await params;

  if (!slug) {
    return <div className="p-10 text-center">Категория не найдена</div>;
  }

  const category: (Category & { products: Product[] }) | null =
    await prisma.category.findUnique({
      where: { slug },
      include: {
        products: {
          orderBy: { price: "asc" },
        },
      },
    });

  if (!category) {
    return (
      <main className="py-24 text-center">
        <h1 className="text-2xl">Категория не найдена</h1>
      </main>
    );
  }

  return (
    <main className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm transition"
          >
            <span className="text-lg">←</span>
            Назад
          </Link>
        </div>

        <h1 className="text-4xl font-semibold mb-14 text-center">
          {category.title}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {category.products.map((product: Product) => (
            <ProductItemCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
