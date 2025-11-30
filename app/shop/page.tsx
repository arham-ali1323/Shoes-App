"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { useProductStore } from "@/lib/product-store";
import { useCartStore } from "@/lib/store";
import { fetchProductsFromAPI, categories } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";
import { FilterState } from "@/types";

export default function ShopPage() {
  const searchParams = useSearchParams();
  const { setProducts, filteredProducts, filters, setFilters, resetFilters } = useProductStore();
  const { addToCart } = useCartStore();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [tempFilters, setTempFilters] = useState<FilterState>(filters);

  useEffect(() => {
    // Fetch products from API
    const loadProducts = async () => {
      try {
        const products = await fetchProductsFromAPI();
        setProducts(products);
      } catch (error) {
        console.error('Failed to load products:', error);
      }
    };
    
    loadProducts();
  }, [setProducts]);

  // Handle URL parameters
  useEffect(() => {
    const urlCategory = searchParams.get('category');
    if (urlCategory && urlCategory !== filters.category) {
      setFilters({ category: urlCategory });
    }
  }, [searchParams, filters.category, setFilters]);

  useEffect(() => {
    setTempFilters(filters);
  }, [filters]);

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    const updated = { ...tempFilters, ...newFilters };
    setTempFilters(updated);
  };

  const applyTempFilters = () => {
    setFilters(tempFilters);
    setIsFilterOpen(false);
  };

  const clearFilters = () => {
    const defaultFilters: FilterState = {
      category: "All",
      priceRange: [0, 500],
      sortBy: "name",
      tags: [],
      search: "",
    };
    setTempFilters(defaultFilters);
    setFilters(defaultFilters);
  };

  const allTags = Array.from(new Set(filteredProducts.flatMap((p) => p.tags)));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="lg:w-64">
          <div className="lg:hidden mb-4">
            <Button
              variant="outline"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>

          <div className={`lg:block ${isFilterOpen ? "block" : "hidden"} bg-white rounded-lg border border-gray-200 p-6`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear
              </Button>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Category</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      checked={tempFilters.category === category}
                      onChange={() => handleFilterChange({ category })}
                      className="mr-2"
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-600">Min: ${tempFilters.priceRange[0]}</label>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={tempFilters.priceRange[0]}
                    onChange={(e) => handleFilterChange({ priceRange: [parseInt(e.target.value), tempFilters.priceRange[1]] })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Max: ${tempFilters.priceRange[1]}</label>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={tempFilters.priceRange[1]}
                    onChange={(e) => handleFilterChange({ priceRange: [tempFilters.priceRange[0], parseInt(e.target.value)] })}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Sort */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Sort By</h3>
              <select
                value={tempFilters.sortBy}
                onChange={(e) => handleFilterChange({ sortBy: e.target.value as FilterState["sortBy"] })}
                className="w-full p-2 border border-gray-200 rounded"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            {/* Tags */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Tags</h3>
              <div className="space-y-2">
                {allTags.map((tag) => (
                  <label key={tag} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={tempFilters.tags.includes(tag)}
                      onChange={(e) => {
                        const newTags = e.target.checked
                          ? [...tempFilters.tags, tag]
                          : tempFilters.tags.filter((t) => t !== tag);
                        handleFilterChange({ tags: newTags });
                      }}
                      className="mr-2"
                    />
                    {tag}
                  </label>
                ))}
              </div>
            </div>

            <Button onClick={applyTempFilters} className="w-full">
              Apply Filters
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Shop</h1>
            <p className="text-gray-600">
              Showing {filteredProducts.length} products
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search products..."
              value={tempFilters.search}
              onChange={(e) => handleFilterChange({ search: e.target.value })}
              className="w-full p-3 border border-gray-200 rounded-lg"
            />
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No products found matching your criteria.</p>
              <Button onClick={clearFilters}>Clear Filters</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
