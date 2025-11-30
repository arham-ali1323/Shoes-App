"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { X, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store";
export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCartStore();
  const handleQuantityChange = (productId: string, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  };
  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
  };
  if (cart.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        {" "}
        <div className="text-center py-16">
          {" "}
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            {" "}
            <ShoppingBag className="w-12 h-12 text-gray-400" />{" "}
          </div>{" "}
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Your cart is empty
          </h1>{" "}
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any products to your cart yet.
          </p>{" "}
          <Button size="lg" asChild>
            <Link href="/shop">Continue Shopping</Link>
          </Button>{" "}
        </div>{" "}
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-8">
      {" "}
      <div className="mb-8">
        {" "}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Shopping Cart
        </h1>{" "}
        <p className="text-gray-600">{cart.itemCount} items in your cart</p>{" "}
      </div>{" "}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {" "}
        <div className="lg:col-span-2 space-y-4">
          {" "}
          {cart.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-lg border border-gray-200 p-6"
            >
              {" "}
              <div className="flex gap-4">
                {" "}
                <div className="relative w-24 h-24 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                  {" "}
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />{" "}
                </div>{" "}
                <div className="flex-1 min-w-0">
                  {" "}
                  <div className="flex items-start justify-between mb-2">
                    {" "}
                    <div>
                      {" "}
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.name}
                      </h3>{" "}
                      <p className="text-sm text-gray-600">{item.category}</p>{" "}
                    </div>{" "}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      {" "}
                      <X className="w-4 h-4" />{" "}
                    </Button>{" "}
                  </div>{" "}
                  <div className="flex items-center justify-between">
                    {" "}
                    <div className="flex items-center gap-3">
                      {" "}
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        {" "}
                        <Minus className="w-4 h-4" />{" "}
                      </Button>{" "}
                      <span className="w-12 text-center font-semibold">
                        {item.quantity}
                      </span>{" "}
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        disabled={item.quantity >= item.stock}
                      >
                        {" "}
                        <Plus className="w-4 h-4" />{" "}
                      </Button>{" "}
                    </div>{" "}
                    <div className="text-right">
                      {" "}
                      <div className="font-semibold text-gray-900">
                        ${item.price * item.quantity}
                      </div>{" "}
                      {item.oldPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          ${item.oldPrice * item.quantity}
                        </div>
                      )}{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
        <div className="lg:col-span-1">
          {" "}
          <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
            {" "}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Order Summary
            </h2>{" "}
            <div className="space-y-3 mb-6">
              {" "}
              <div className="flex justify-between text-gray-600">
                {" "}
                <span>Subtotal</span> <span>${cart.total.toFixed(2)}</span>{" "}
              </div>{" "}
              <div className="flex justify-between text-gray-600">
                {" "}
                <span>Shipping</span>{" "}
                <span>{cart.total >= 100 ? "Free" : "$10.00"}</span>{" "}
              </div>{" "}
              <div className="flex justify-between text-gray-600">
                {" "}
                <span>Tax</span> <span>${(cart.total * 0.08).toFixed(2)}</span>{" "}
              </div>{" "}
              <div className="border-t pt-3">
                {" "}
                <div className="flex justify-between font-semibold text-lg text-gray-900">
                  {" "}
                  <span>Total</span>{" "}
                  <span>
                    {" "}
                    $
                    {cart.total >= 100
                      ? (cart.total * 1.08).toFixed(2)
                      : ((cart.total + 10) * 1.08).toFixed(2)}{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            {cart.total < 100 && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6">
                {" "}
                <p className="text-sm text-blue-800">
                  {" "}
                  Add ${(100 - cart.total).toFixed(2)} more for free shipping!{" "}
                </p>{" "}
              </div>
            )}{" "}
            <div className="space-y-3">
              {" "}
              <Button
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Proceed to Checkout <ArrowRight className="w-5 h-5 ml-2" />
              </Button>{" "}
              <Button variant="outline" size="lg" className="w-full" asChild>
                <Link href="/shop">Continue Shopping</Link>
              </Button>{" "}
            </div>{" "}
            <div className="mt-6 pt-6 border-t border-gray-200">
              {" "}
              <Button
                variant="ghost"
                onClick={clearCart}
                className="text-red-600 hover:text-red-700 hover:bg-red-50 w-full"
              >
                {" "}
                Clear Cart{" "}
              </Button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
