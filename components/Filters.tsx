"use client";

import { useState } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories, allTags } from "@/data/products";
import { FilterState } from "@/types";
interface FiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: Partial<FilterState>) => void;
  onReset: () => void;
  isOpen: boolean;
  onToggle: () => void;
}
export function Filters({
  filters,
  onFiltersChange,
  onReset,
  isOpen,
  onToggle,
}: FiltersProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "category",
    "price",
  ]);
  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };
  return (
    <div className="lg:w-64 flex-shrink-0">
      {" "}
      <div className="lg:hidden mb-4">
        {" "}
        <Button
          onClick={onToggle}
          variant="outline"
          className="w-full flex items-center justify-between"
        >
          {" "}
          Filters{" "}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />{" "}
        </Button>{" "}
      </div>{" "}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:block bg-white rounded-lg border border-gray-200 p-6`}
      >
        {" "}
        <div className="flex items-center justify-between mb-6">
          {" "}
          <h2 className="text-lg font-semibold">Filters</h2>{" "}
          <Button variant="ghost" size="sm" onClick={onReset}>
            {" "}
            Reset{" "}
          </Button>{" "}
        </div>{" "}
        <div className="space-y-6">
          {" "}
          <div>
            {" "}
            <button
              onClick={() => toggleSection("category")}
              className="flex items-center justify-between w-full text-left font-medium mb-3"
            >
              {" "}
              Category{" "}
              {expandedSections.includes("category") ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}{" "}
            </button>{" "}
            {expandedSections.includes("category") && (
              <div className="space-y-2">
                {" "}
                {categories.map((category: string) => (
                  <label
                    key={category}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    {" "}
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={filters.category === category}
                      onChange={(e) =>
                        onFiltersChange({ category: e.target.value })
                      }
                      className="text-blue-600 focus:ring-blue-500"
                    />{" "}
                    <span className="text-sm text-gray-700">{category}</span>{" "}
                  </label>
                ))}{" "}
              </div>
            )}{" "}
          </div>{" "}
          <div>
            {" "}
            <button
              onClick={() => toggleSection("price")}
              className="flex items-center justify-between w-full text-left font-medium mb-3"
            >
              {" "}
              Price Range{" "}
              {expandedSections.includes("price") ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}{" "}
            </button>{" "}
            {expandedSections.includes("price") && (
              <div className="space-y-3">
                {" "}
                <div className="flex items-center gap-2">
                  {" "}
                  <input
                    type="number"
                    min="0"
                    max="500"
                    value={filters.priceRange[0]}
                    onChange={(e) =>
                      onFiltersChange({
                        priceRange: [
                          parseInt(e.target.value) || 0,
                          filters.priceRange[1],
                        ],
                      })
                    }
                    className="w-20 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
                  />{" "}
                  <span className="text-sm text-gray-500">to</span>{" "}
                  <input
                    type="number"
                    min="0"
                    max="500"
                    value={filters.priceRange[1]}
                    onChange={(e) =>
                      onFiltersChange({
                        priceRange: [
                          filters.priceRange[0],
                          parseInt(e.target.value) || 500,
                        ],
                      })
                    }
                    className="w-20 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
                  />{" "}
                </div>{" "}
                <div className="relative">
                  {" "}
                  <div className="h-2 bg-gray-200 rounded-full">
                    {" "}
                    <div
                      className="h-2 bg-blue-600 rounded-full"
                      style={{
                        width: `${
                          ((filters.priceRange[1] - filters.priceRange[0]) /
                            500) *
                          100
                        }%`,
                        marginLeft: `${(filters.priceRange[0] / 500) * 100}%`,
                      }}
                    />{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            )}{" "}
          </div>{" "}
          <div>
            {" "}
            <button
              onClick={() => toggleSection("sort")}
              className="flex items-center justify-between w-full text-left font-medium mb-3"
            >
              {" "}
              Sort By{" "}
              {expandedSections.includes("sort") ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}{" "}
            </button>{" "}
            {expandedSections.includes("sort") && (
              <div className="space-y-2">
                {" "}
                {["name", "price-low", "price-high", "newest"].map((sort) => (
                  <label
                    key={sort}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    {" "}
                    <input
                      type="radio"
                      name="sortBy"
                      value={sort}
                      checked={filters.sortBy === sort}
                      onChange={(e) =>
                        onFiltersChange({
                          sortBy: e.target.value as FilterState["sortBy"],
                        })
                      }
                      className="text-blue-600 focus:ring-blue-500"
                    />{" "}
                    <span className="text-sm text-gray-700">
                      {" "}
                      {sort === "name"
                        ? "Name"
                        : sort === "price-low"
                        ? "Price: Low to High"
                        : sort === "price-high"
                        ? "Price: High to Low"
                        : "Newest"}{" "}
                    </span>{" "}
                  </label>
                ))}{" "}
              </div>
            )}{" "}
          </div>{" "}
          <div>
            {" "}
            <button
              onClick={() => toggleSection("tags")}
              className="flex items-center justify-between w-full text-left font-medium mb-3"
            >
              {" "}
              Tags{" "}
              {expandedSections.includes("tags") ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}{" "}
            </button>{" "}
            {expandedSections.includes("tags") && (
              <div className="space-y-2">
                {" "}
                {allTags.map((tag) => (
                  <label
                    key={tag}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    {" "}
                    <input
                      type="checkbox"
                      checked={filters.tags.includes(tag)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          onFiltersChange({ tags: [...filters.tags, tag] });
                        } else {
                          onFiltersChange({
                            tags: filters.tags.filter((t) => t !== tag),
                          });
                        }
                      }}
                      className="text-blue-600 focus:ring-blue-500"
                    />{" "}
                    <span className="text-sm text-gray-700">{tag}</span>{" "}
                  </label>
                ))}{" "}
              </div>
            )}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
