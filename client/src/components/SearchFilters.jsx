import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

export const SortOption = 'title' | 'price-asc' | 'price-desc' | 'rating';

const SearchFilters = ({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalProducts,
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-xl border border-gray-200 p-6 shadow-lg">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        {/* Search input */}
        <div className="flex-1 w-full lg:max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full h-12 pl-10 pr-4 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Sort by dropdown */}
        <div className="flex items-center gap-4 w-full lg:w-auto">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Sort by:</span>
          </div>

          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-48 h-12 px-3 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="title">Name (A-Z)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
        <span>
          {totalProducts} {totalProducts === 1 ? 'product' : 'products'} found
        </span>
        {searchQuery && (
          <span>
            Searching for: <span className="font-medium text-gray-900">"{searchQuery}"</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default SearchFilters;
