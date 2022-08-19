/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import axios from "axios";
import Stars from "components/Stars";
import Image from "next/image";
import { ProductType, ProductCardType } from "./type";

const DefaultButton: React.FC<{ product: ProductType }> = ({ product }) => {
  const { title, price, image } = product;
  return (
    <a
      href="#"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <span className="hidden sm:block">Add to cart</span>
      <span className="block sm:hidden">Add</span>
    </a>
  );
};
const ProductCard: React.FC<ProductCardType> = ({
  product,
  Button = DefaultButton,
}) => {
  const { id, image, title, price, rating } = product;
  return (
    <div className="w-full flex flex-col justify-between max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 gap-4">
      <Link href={`/products/${id}`}>
        <a>
          {image ? (
            <img className="p-8 rounded-t-lg" src={image} alt="product image" />
          ) : (
            <div className="flex justify-center items-center h-64 bg-gray-300 rounded w-full animate-pulse dark:bg-gray-700">
              <svg
                className="w-12 h-12 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
          )}
        </a>
      </Link>
      <div className="px-5 pb-5">
        <a href="#">
          {title ? (
            <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white sm:text-xl">
              {title}
            </h5>
          ) : (
            <div className="h-2.5 bg-gray-200 rounded-full animate-pulse dark:bg-gray-700 w-24 mb-4"></div>
          )}
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <Stars count={rating && parseFloat(rating.rate.toFixed(1))} />
        </div>
        <div className="flex justify-between items-center">
          {price ? (
            <span className="text-md sm:text-xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
          ) : (
            <div className="h-5 animate-pulse bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-4"></div>
          )}
          {Button ? (
            <Button product={product} {...product} />
          ) : (
            <div className="h-5 bg-gray-200 animate-pulse rounded-full dark:bg-gray-700 w-12 mb-4"></div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
