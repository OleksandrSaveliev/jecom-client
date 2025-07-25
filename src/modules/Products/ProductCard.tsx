import type { Product } from "../../types/product";
import { Link } from "react-router";
import React from "react";
import ImageWithFallback from "../../components/ImageWithFallback";

interface ProductCardProps {
  product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group block overflow-hidden"
    >
      <ImageWithFallback
        src={product.imageUrl}
        alt="Product Image"
        style="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
      />

      <div className="relative bg-white pt-3">
        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {product.name}
        </h3>

        <p className="mt-2">
          <span className="sr-only"> Regular Price </span>

          <span className="tracking-wider text-gray-900">
            {" "}
            {"$" + product.price}{" "}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
