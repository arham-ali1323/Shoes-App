"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  ArrowLeft,
  Star,
  Plus,
  Minus,
  Check,
  Truck,
  Shield,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCartStore } from "@/lib/store";
import { Product } from "@/types";
export default function ProductDetailPage() {
  const params = useParams();
  const { addToCart } = useCartStore();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const product = products.find((p) => p.id === params.id);
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        {" "}
        <div className="text-center py-12">
          {" "}
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {" "}
            Product not found{" "}
          </h1>{" "}
          <p className="text-gray-600 mb-6">
            {" "}
            The product you are looking for does not exist.{" "}
          </p>{" "}
          <Button asChild>
            <Link href="/shop">Back to Shop</Link>
          </Button>{" "}
        </div>{" "}
      </div>
    );
  }
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;
  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };
  return (
    <div className="container mx-auto px-4 py-8">
      {" "}
      <div className="mb-8">
        {" "}
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/shop">
            <span className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Shop
            </span>
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {" "}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {" "}
          <div className="space-y-4">
            {" "}
            <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden">
              {" "}
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {discount > 0 && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded">
                  -{discount}%
                </div>
              )}
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors relative ${
                    selectedImage === index
                      ? "border-blue-600"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </motion.div>{" "}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {" "}
          <div>
            {" "}
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>{" "}
            <div className="flex items-center gap-4 mb-4">
              {" "}
              <div className="flex items-center gap-1">
                {" "}
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}{" "}
              </div>{" "}
              <span className="text-gray-600">(4.5) · 128 reviews</span>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex items-center gap-4 mb-6">
            {" "}
            <span className="text-3xl font-bold text-gray-900">
              ${product.price}
            </span>{" "}
            {product.oldPrice && (
              <span className="text-xl text-gray-500 line-through">
                ${product.oldPrice}
              </span>
            )}{" "}
            {discount > 0 && (
              <span className="bg-red-100 text-red-600 px-2 py-1 text-sm font-semibold rounded">
                {" "}
                Save ${product.oldPrice! - product.price}{" "}
              </span>
            )}{" "}
          </div>{" "}
          <div className="space-y-4">
            {" "}
            <div>
              {" "}
              <h3 className="font-semibold text-gray-900 mb-2">
                Description
              </h3>{" "}
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>{" "}
            </div>{" "}
            <div>
              {" "}
              <h3 className="font-semibold text-gray-900 mb-2">
                Product Details
              </h3>{" "}
              <ul className="space-y-2 text-gray-600">
                {" "}
                <li>• Category: {product.category}</li>{" "}
                <li>
                  • Stock:{" "}
                  {product.stock > 0
                    ? `${product.stock} available`
                    : "Out of stock"}
                </li>{" "}
                <li>• Tags: {product.tags.join(", ")}</li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
          <div className="space-y-4">
            {" "}
            <div>
              {" "}
              <h3 className="font-semibold text-gray-900 mb-2">
                Quantity
              </h3>{" "}
              <div className="flex items-center gap-3">
                {" "}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  {" "}
                  <Minus className="w-4 h-4" />{" "}
                </Button>{" "}
                <span className="w-16 text-center font-semibold">
                  {quantity}
                </span>{" "}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= product.stock}
                >
                  {" "}
                  <Plus className="w-4 h-4" />{" "}
                </Button>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex gap-4">
              {" "}
              <Button
                size="lg"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`flex-1 ${
                  isAddedToCart
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {" "}
                {isAddedToCart ? (
                  <span>
                    <Check className="w-5 h-5 mr-2" /> Added to Cart
                  </span>
                ) : (
                  <span>
                    <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
                  </span>
                )}{" "}
              </Button>{" "}
              <Button
                size="lg"
                variant="outline"
                disabled={product.stock === 0}
              >
                {" "}
                Buy Now{" "}
              </Button>{" "}
            </div>{" "}
            {product.stock === 0 && (
              <p className="text-red-600 font-medium">
                This product is currently out of stock
              </p>
            )}{" "}
          </div>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
            {" "}
            <div className="flex items-center gap-3">
              {" "}
              <Truck className="w-5 h-5 text-gray-400" />{" "}
              <div>
                {" "}
                <p className="font-medium text-gray-900">Free Shipping</p>{" "}
                <p className="text-sm text-gray-600">On orders over $100</p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex items-center gap-3">
              {" "}
              <Shield className="w-5 h-5 text-gray-400" />{" "}
              <div>
                {" "}
                <p className="font-medium text-gray-900">Secure Payment</p>{" "}
                <p className="text-sm text-gray-600">100% secure</p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex items-center gap-3">
              {" "}
              <RefreshCw className="w-5 h-5 text-gray-400" />{" "}
              <div>
                {" "}
                <p className="font-medium text-gray-900">Easy Returns</p>{" "}
                <p className="text-sm text-gray-600">30-day policy</p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </motion.div>{" "}
      </div>{" "}
    </div>
  );
}
