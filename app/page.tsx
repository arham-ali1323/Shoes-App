"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { fetchProductsFromAPI, featuredProducts, categories } from "@/data/products";
import { useProductStore } from "@/lib/product-store";
import { useEffect, useState } from "react";
import { ArrowRight, Star, Shield, Truck, RefreshCw } from "lucide-react";
import { Product } from "@/types";

export default function HomePage() {
  const { setProducts } = useProductStore();
  const [products, setProductsState] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await fetchProductsFromAPI();
      setProducts(fetchedProducts);
      setProductsState(fetchedProducts);
    };
    fetchProducts();
  }, [setProducts]);
  
  return (
    <div className="space-y-16 overflow-x-hidden">
      <section className="relative bg-gray-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {" "}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {" "}
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {" "}
                Step Into Style{" "}
              </h1>{" "}
              <p className="text-xl text-gray-600 mb-8">
                {" "}
                Discover our premium collection of footwear. From performance
                running shoes to timeless lifestyle classics.{" "}
              </p>{" "}
              <div className="flex flex-col sm:flex-row gap-4">
                {" "}
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                  asChild
                >
                  <Link href="/shop">
                    <span>Shop Now <ArrowRight className="w-5 h-5 ml-2" /></span>
                  </Link>
                </Button>{" "}
                <Button size="lg" variant="outline">
                  {" "}
                  View Collections{" "}
                </Button>{" "}
              </div>{" "}
            </motion.div>{" "}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square lg:aspect-[4/3]"
            >
              {" "}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl" />{" "}
              <Image
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop&auto=format"
                alt="Hero shoes"
                fill
                className="object-cover rounded-2xl"
              />{" "}
            </motion.div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-full">
          <div className="text-center mb-12">
            {" "}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {" "}
              Featured Products{" "}
            </h2>{" "}
            <p className="text-lg text-gray-600">
              {" "}
              Handpicked favorites from our collection{" "}
            </p>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {" "}
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}{" "}
          </div>{" "}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/shop">View All Products</Link>
            </Button>
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-full">
          {" "}
          <div className="text-center mb-12">
            {" "}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {" "}
              Shop by Category{" "}
            </h2>{" "}
            <p className="text-lg text-gray-600">
              {" "}
              Find exactly what you are looking for{" "}
            </p>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {" "}
            {["Running", "Basketball", "Lifestyle", "Skate"].map((category) => (
              <Link
                key={category}
                href={`/shop?category=${category}`}
                className="group relative bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {" "}
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative">
                  {" "}
                  <Image
                    src={`https://images.unsplash.com/photo-${category === "Running" ? "1542291026-7eec264c27ff" : category === "Basketball" ? "1551698618-1dfe5d97d256" : category === "Lifestyle" ? "1600185365483-26d7a4cc7519" : "1595950653106-6c9ebd614d3a"}?w=400&h=400&fit=crop&auto=format`}
                    alt={category}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    {" "}
                    <span className="text-2xl font-bold text-white group-hover:text-white transition-colors">
                      {" "}
                      {category}{" "}
                    </span>{" "}
                  </div>
                </div>{" "}
                <div className="p-4 text-center">
                  {" "}
                  <span className="text-sm text-gray-600">
                    {" "}
                    Shop {category}{" "}
                  </span>{" "}
                </div>{" "}
              </Link>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {" "}
            <div className="text-center">
              {" "}
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {" "}
                <Truck className="w-8 h-8 text-blue-600" />{" "}
              </div>{" "}
              <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>{" "}
              <p className="text-gray-600">On orders over $100</p>{" "}
            </div>{" "}
            <div className="text-center">
              {" "}
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {" "}
                <Shield className="w-8 h-8 text-blue-600" />{" "}
              </div>{" "}
              <h3 className="text-lg font-semibold mb-2">Secure Payment</h3>{" "}
              <p className="text-gray-600">100% secure transactions</p>{" "}
            </div>{" "}
            <div className="text-center">
              {" "}
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {" "}
                <RefreshCw className="w-8 h-8 text-blue-600" />{" "}
              </div>{" "}
              <h3 className="text-lg font-semibold mb-2">Easy Returns</h3>{" "}
              <p className="text-gray-600">30-day return policy</p>{" "}
            </div>{" "}
            <div className="text-center">
              {" "}
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {" "}
                <Star className="w-8 h-8 text-blue-600" />{" "}
              </div>{" "}
              <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>{" "}
              <p className="text-gray-600">Authentic products only</p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </div>
  );
}
