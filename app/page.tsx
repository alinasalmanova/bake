"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/ProductCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/images/hero.jpg')" }} />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-3xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tight"
          >
            Lady Bake
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="text-lg md:text-xl text-white/90 leading-relaxed"
          >
            Домашняя пекарня авторских тортов и десертов с индивидуальным подходом
          </motion.p>

          <div className="mx-auto mt-10 w-24 h-[2px] bg-white/40 rounded-full" />
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-16 text-center">
            Категории
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ProductCard
              title="Торты"
              description="Авторские торты на заказ"
              image="/images/categories/cakes.jpg"
              href="/catalog/cakes"
            />
            <ProductCard
              title="Пироги"
              description="Домашние сладкие пироги"
              image="/images/categories/pies.jpg"
              href="/catalog/pies"
            />
            <ProductCard
              title="Мясные пироги"
              description="Сытные пироги с начинкой"
              image="/images/categories/meat-pies.jpg"
              href="/catalog/meat-pies"
            />
          </div>
        </div>
      </section>

      {/* ================= ABOUT + WHY US ================= */}
      <section className="relative py-28 bg-muted overflow-hidden">
        <motion.div
          className="absolute -top-16 -left-16 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl -z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-10 relative inline-block">
              О Lady Bake
              <span className="absolute -bottom-3 left-0 w-20 h-[3px] bg-primary rounded-full" />
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="text-lg text-foreground/90 leading-[1.9] max-w-xl"
            >
              Lady Bake — это домашняя пекарня, где десерты создаются
              в спокойной атмосфере, без спешки и шаблонов.
              Мы верим, что вкус — это забота,
              а торт — часть важного момента вашей жизни.
            </motion.p>
          </div>

          <div className="md:w-1/2 grid grid-cols-1 gap-6">
            {[
              { title: "Натуральные ингредиенты", text: "Только свежие продукты без заменителей и компромиссов" },
              { title: "Индивидуальный дизайн", text: "Каждый торт создаётся под событие и вкус клиента" },
              { title: "Домашнее качество", text: "Ручная работа и внимание к каждой детали" },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-card rounded-3xl p-8 border border-border shadow-[0_16px_36px_-14px_rgba(0,0,0,0.28)] hover:shadow-[0_22px_44px_-18px_rgba(0,0,0,0.36)] transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-36 bg-secondary text-center overflow-hidden">
        <motion.div
          className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-primary/25 blur-[120px]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.35, 0.25] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative z-10 text-3xl font-semibold mb-6"
        >
          Готовы сделать заказ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative z-10 text-lg text-secondary-foreground/80 mb-14"
        >
          Напишите нам в WhatsApp, и мы обсудим все детали
        </motion.p>

        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
          className="relative z-10 inline-block"
        >
          <a href="https://wa.me/77070550588" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full px-16 py-6 text-lg bg-primary text-primary-foreground shadow-[0_18px_44px_-18px_rgba(0,0,0,0.4)] hover:shadow-[0_22px_52px_-20px_rgba(0,0,0,0.45)] transition-shadow">
              Написать в WhatsApp
            </Button>
          </a>
        </motion.div>
      </section>
    </main>
  );
}
