"use client";
import { useParams } from "react-router";
import Button from "../../components/Button";
import ImageWithFallback from "../../components/ImageWithFallback";
import type { Product } from "../../types/product";
import { formatDate } from "../../utils/formatDate";
import { useEffect, useState } from "react";
import { fetchProductById } from "../../api/products";

const ProductItemPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) {
      console.error("Product ID is not provided");
      return;
    }
    fetchProductById(id)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return "Loading...";
  if (!product) return null;
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="flex justify-between sm:mb-4 items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl sm:mb-2">
            {product.name}
          </h2>
          <p className="text-gray-900 sm:text-xl sm:mb-2">
            {"$" + product.price}
          </p>
          {product.available ? (
            <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="-ms-1 me-1.5 size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p className="text-sm whitespace-nowrap">Available</p>
            </span>
          ) : (
            <span className="inline-flex items-center justify-center rounded-full border border-red-500 px-2.5 py-0.5 text-red-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="-ms-1 me-1.5 size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>

              <p className="text-sm whitespace-nowrap">Not Available</p>
            </span>
          )}
          <p className="text-gray-400 text-sm sm:mt-2">
            Since: {formatDate(product.releaseDate)}
          </p>
        </div>
        <div>
          <Button
            size="md"
            color="action"
          >
            Add To Cart
          </Button>
        </div>
      </div>
      <ImageWithFallback
        src={product.imageUrl}
        style="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
      />
      <p className="mt-4 mx-auto max-w-xl text-center text-gray-500">
        {product.description}
      </p>
    </div>
  );
};

export default ProductItemPage;
