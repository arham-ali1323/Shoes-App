"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About SHOE STORE
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your premium destination for quality footwear since 2020. Discover the latest trends and timeless classics in our carefully curated collection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, SHOE STORE began as a small passion project with a simple mission: to provide premium footwear that combines style, comfort, and quality. What started as a small boutique has grown into a trusted destination for shoe enthusiasts across the country.
            </p>
            <p className="text-gray-600 mb-4">
              We believe that the right pair of shoes can transform not just your outfit, but your entire day. That's why we carefully select every shoe in our collection, ensuring it meets our high standards for quality, comfort, and style.
            </p>
            <p className="text-gray-600">
              Whether you're looking for performance athletic shoes, comfortable everyday wear, or stylish statement pieces, you'll find them all at SHOE STORE.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative aspect-square rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop&auto=format"
              alt="Our shoe store interior"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl font-bold text-blue-600">500+</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Products</h3>
            <p className="text-gray-600">Carefully selected footwear from top brands</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl font-bold text-blue-600">10k+</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Happy Customers</h3>
            <p className="text-gray-600">Satisfied customers who love our shoes</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl font-bold text-blue-600">4.9★</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Customer Rating</h3>
            <p className="text-gray-600">Excellent reviews from our customers</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-gray-50 rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every shoe in our collection is carefully inspected to ensure it meets our high standards.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Customer Satisfaction</h3>
              <p className="text-gray-600">
                Your happiness is our priority. We offer hassle-free returns and excellent customer service to ensure you love your purchase.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Latest Trends</h3>
              <p className="text-gray-600">
                We stay on top of the latest fashion trends to bring you the most current and stylish footwear options.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Fair Prices</h3>
              <p className="text-gray-600">
                Premium quality doesn't have to break the bank. We offer competitive prices on all our products.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
