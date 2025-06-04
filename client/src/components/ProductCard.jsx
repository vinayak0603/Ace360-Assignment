import React from 'react';
import { Star, Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const discountedPrice = product.price * (1 - product.discountPercentage / 100);

  return (
    <div className="group overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white rounded-lg">
      <div className="relative overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {product.discountPercentage > 0 && (
          <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
            -{Math.round(product.discountPercentage)}%
          </span>
        )}

        <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110">
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
        </button>
      </div>

      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.title}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-900">
                ${discountedPrice.toFixed(2)}
              </span>
              {product.discountPercentage > 0 && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium text-gray-700">
                {product.rating.toFixed(1)}
              </span>
              <span className="text-sm text-gray-500">
                ({product.stock} in stock)
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2">
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
            {product.brand}
          </span>
          <span className="text-xs border border-gray-300 text-gray-700 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
