"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, Search, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useCartStore } from "../lib/store";
import { categories } from "../data/products";
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const { getCartItemCount } = useCartStore();
  const cartItemCount = getCartItemCount();
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {" "}
      <div className="container mx-auto px-4">
        {" "}
        <div className="flex items-center justify-between h-16">
          {" "}
          <div className="flex items-center gap-8">
            {" "}
            <Link href="/" className="text-2xl font-bold text-gray-900">
              {" "}
              SHOE STORE{" "}
            </Link>{" "}
            <nav className="hidden lg:flex items-center gap-6">
              {" "}
              <Link
                href="/shop"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                {" "}
                Shop{" "}
              </Link>{" "}
              <div className="relative">
                {" "}
                <button
                  onMouseEnter={() => setIsCollectionsOpen(true)}
                  onMouseLeave={() => setIsCollectionsOpen(false)}
                  className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {" "}
                  Collections <ChevronDown className="w-4 h-4" />{" "}
                </button>{" "}
                <AnimatePresence>
                  {" "}
                  {isCollectionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      onMouseEnter={() => setIsCollectionsOpen(true)}
                      onMouseLeave={() => setIsCollectionsOpen(false)}
                      className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2"
                    >
                      {" "}
                      {categories.map((category) => (
                        <Link
                          key={category}
                          href={`/shop?category=${category}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                        >
                          {" "}
                          {category}{" "}
                        </Link>
                      ))}{" "}
                    </motion.div>
                  )}{" "}
                </AnimatePresence>{" "}
              </div>{" "}
              <Link
                href="/about"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                {" "}
                About{" "}
              </Link>{" "}
              <Link
                href="/contact"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                {" "}
                Contact{" "}
              </Link>{" "}
            </nav>{" "}
          </div>{" "}
          <div className="flex items-center gap-4">
            {" "}
            <Button variant="ghost" size="icon" className="hidden md:flex">
              {" "}
              <Search className="w-5 h-5" />{" "}
            </Button>{" "}
            <Link href="/cart" className="relative">
              {" "}
              <Button variant="ghost" size="icon">
                {" "}
                <ShoppingCart className="w-5 h-5" />{" "}
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {" "}
                    {cartItemCount}{" "}
                  </span>
                )}{" "}
              </Button>{" "}
            </Link>{" "}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {" "}
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}{" "}
            </Button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <AnimatePresence>
        {" "}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200"
          >
            {" "}
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {" "}
              <Link
                href="/shop"
                className="text-gray-700 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {" "}
                Shop{" "}
              </Link>{" "}
              <div>
                {" "}
                <button
                  className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors py-2 w-full text-left"
                  onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
                >
                  {" "}
                  Collections <ChevronDown className="w-4 h-4" />{" "}
                </button>{" "}
                <AnimatePresence>
                  {" "}
                  {isCollectionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 flex flex-col gap-2"
                    >
                      {" "}
                      {categories.map((category) => (
                        <Link
                          key={category}
                          href={`/shop?category=${category}`}
                          className="text-gray-700 hover:text-gray-900 transition-colors py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {" "}
                          {category}{" "}
                        </Link>
                      ))}{" "}
                    </motion.div>
                  )}{" "}
                </AnimatePresence>{" "}
              </div>{" "}
              <Link
                href="/about"
                className="text-gray-700 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {" "}
                About{" "}
              </Link>{" "}
              <Link
                href="/contact"
                className="text-gray-700 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {" "}
                Contact{" "}
              </Link>{" "}
            </nav>{" "}
          </motion.div>
        )}{" "}
      </AnimatePresence>{" "}
    </header>
  );
}
