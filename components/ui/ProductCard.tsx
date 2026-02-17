"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export function ProductCard({
  title,
  description,
  image,
  href,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 160, damping: 14 }}
      className="
        relative rounded-3xl overflow-hidden
        bg-card border border-border
        shadow-[0_16px_36px_-14px_rgba(0,0,0,0.35)]
        hover:shadow-[0_24px_48px_-18px_rgba(0,0,0,0.45)]
        transition-shadow
      "
    >
      {/* IMAGE */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* CONTENT */}
      <div className="p-6 text-center">
        <h3 className="text-xl mb-2">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>

        <Link href={href} className="inline-block">
          <Button
            variant="outline"
            className="
              rounded-full px-8
              border-border
              hover:bg-muted
              hover:text-foreground
            "
          >
            Смотреть
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
