"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { useCartStore } from "@/lib/store";
import { cn } from "@/lib/utils";
interface ProductCardProps {
  product: Product;
  className?: string;
}
export function ProductCard({ product, className }: ProductCardProps) {
  const { addToCart } = useCartStore();
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group relative bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300",
        className
      )}
    >
      {" "}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        {" "}
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />{" "}
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
            {" "}
            -{discount}%{" "}
          </div>
        )}{" "}
        {product.stock <= 5 && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 text-xs font-semibold rounded">
            {" "}
            Only {product.stock} left{" "}
          </div>
        )}{" "}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />{" "}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2">
          {" "}
          <Button
            size="sm"
            variant="secondary"
            className="bg-white/90 hover:bg-white"
            asChild
          >
            <Link href={`/product/${product.id}`}>
              <span><Eye className="w-4 h-4 mr-1" /> View</span>
            </Link>
          </Button>{" "}
          <Button
            size="sm"
            className="bg-white/90 hover:bg-white text-gray-900"
            onClick={() => addToCart(product)}
            disabled={product.stock === 0}
          >
            {" "}
            <ShoppingCart className="w-4 h-4 mr-1" /> Add{" "}
          </Button>{" "}
        </div>{" "}
      </div>{" "}
      <div className="p-4">
        {" "}
        <h3 className="font-medium text-gray-900 mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {" "}
          {product.name}{" "}
        </h3>{" "}
        <div className="flex items-center gap-2 mb-2">
          {" "}
          <span className="text-lg font-semibold text-gray-900">
            ${product.price}
          </span>{" "}
          {product.oldPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.oldPrice}
            </span>
          )}{" "}
        </div>{" "}
        <div className="flex flex-wrap gap-1">
          {" "}
          {product.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
            >
              {" "}
              {tag}{" "}
            </span>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </motion.div>
  );
}
