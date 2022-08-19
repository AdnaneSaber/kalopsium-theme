import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { ProductCard, Stars } from "components";
import { ProductType } from "components/ProductCard/type";
import Router from "next/router";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);
const StripForm: React.FC<{ product: ProductType }> = ({ product }) => {
  // const { id } = product;
  const router = useRouter();
  const { pid } = router.query;
  const [prod, setProd] = useState(product);
  useEffect(() => {
    if (!product) {
      (async () => {
        const { data } = await axios.get(`/api/products/retrieve/${pid}`);
        setProd(data);
      })();
    }
  }, [pid, product]);

  const query = new URLSearchParams(window.location.search);
  const checkout = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data } = await axios.post("/api/checkout_sessions", {
      product,
      productPage: `/products/${product.id}`,
    });
    // redirect to the url in data.url using next/router
    Router.push(data);
  };
  return (
    <form onSubmit={checkout}>
      <section>
        <button
          type="submit"
          role="link"
          disabled={query.get("success") === "true"}
          className={"text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-emerald-500 " +
            (query.get("success") === "true" ? "bg-emerald-500" : "bg-blue-500")
          }
        >
          <span>
            {query.get("success") === "true"
              ? "You just bought the item"
              : "Checkout"}
          </span>
        </button>
      </section>
    </form>
  );
};
const Page = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [prod, setProd] = useState<ProductType>();
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/products/retrieve/${pid}`);
      setProd(data);
    })();
  }, [pid]);

  return prod ? (
    <ProductCard product={prod} Button={StripForm} />
  ) : (
    <div className="w-full flex flex-col justify-between max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 gap-4">
      <a href="#">
        <div className="flex justify-center items-center w-full h-64 bg-gray-300 rounded animate-pulse dark:bg-gray-700">
          <svg
            className="w-12 h-12 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 640 512"
          >
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>
          </svg>
        </div>
      </a>
      <div className="px-5 pb-5">
        <div className="h-2.5 bg-gray-200 rounded-full animate-pulse dark:bg-gray-700 w-24 mb-4"></div>
        <div className="flex items-center mt-2.5 mb-5 animate-pulse">
          <Stars count={0.0} />
        </div>
        <div className="flex justify-between items-center animate-pulse">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-8 mb-4"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-12 mb-4"></div>
        </div>
      </div>
    </div>
  );
};
export default Page;
