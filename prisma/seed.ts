import { prisma } from "../lib/prisma";

async function main() {
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const cakes = await prisma.category.create({
    data: {
      title: "Торты",
      slug: "cakes",
    },
  });

  const pies = await prisma.category.create({
    data: {
      title: "Пироги",
      slug: "pies",
    },
  });

  const meatPies = await prisma.category.create({
    data: {
      title: "Мясные пироги",
      slug: "meat-pies",
    },
  });

  await prisma.product.createMany({
    data: [
      {
        title: "Шоколадный муссовый",
        composition: "Шоколадный бисквит, мусс из тёмного шоколада, сливки",
        price: 12000,
        weight: "1.5 кг",
        image: "/images/products/cakes/choco.jpg",
        badge: "hit",
        categoryId: cakes.id,
      },
      {
        title: "Ягодный чизкейк",
        composition: "Сливочный сыр, песочная основа, микс ягод",
        price: 14000,
        weight: "1.3 кг",
        image: "/images/products/cakes/berry.jpg",
        badge: "new",
        categoryId: cakes.id,
      },
      {
        title: "Ванильный с клубникой",
        composition: "Ванильный бисквит, клубничный конфитюр, крем чиз",
        price: 11500,
        weight: "1.4 кг",
        image: "/images/products/cakes/vanilla.jpg",
        categoryId: cakes.id,
      },
      {
        title: "Яблочный пирог",
        image: "/images/products/pies/apple.jpg",
        price: 5500,
        weight: "900 г",
        composition: "Яблоки, корица, песочное тесто, сливочное масло",
        badge: "hit",
        categoryId: pies.id,
      },
      {
        title: "Вишнёвый пирог",
        image: "/images/products/pies/cherry.jpg",
        price: 6000,
        weight: "950 г",
        composition: "Вишня, сахар, песочная основа, ваниль",
        categoryId: pies.id,
      },
      {
        title: "Абрикосовый пирог",
        image: "/images/products/pies/apricot.jpg",
        price: 5800,
        weight: "900 г",
        composition: "Абрикосы, нежное тесто, сливочный крем",
        badge: "new",
        categoryId: pies.id,
      },
      {
        title: "Пирог с говядиной",
        image: "/images/products/meat-pies/beef.jpg",
        price: 7500,
        weight: "1.1 кг",
        composition: "Говядина, лук, специи, дрожжевое тесто",
        badge: "hit",
        categoryId: meatPies.id,
      },
      {
        title: "Пирог с курицей и грибами",
        image: "/images/products/meat-pies/chicken-mushroom.jpg",
        price: 7000,
        weight: "1 кг",
        composition: "Куриное филе, шампиньоны, сливки, тесто",
        categoryId: meatPies.id,
      },
      {
        title: "Пирог с лососем и шпинатом",
        image: "/images/products/meat-pies/salmon.jpg",
        price: 8000,
        weight: "1.2 кг",
        composition: "Лосось, шпинат, сливки, тесто",
        badge: "new",
        categoryId: meatPies.id,
      },

    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
