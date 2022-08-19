import { Input, Select } from "components";

const Landing = () => {
  return (
    <section className="headerTitle flex items-center px-5 justify-center flex-col gap-y-10 py-20">
      <h1 className="font-black text-xl text-gray-900 dark:text-white text-center md:text-4xl">
        <span className="hidden md:block">
          Kalopsium, Buy and sell anything anywhere
        </span>
        <span className="md:hidden">Kalopsium</span>
      </h1>
      <h5 className="text-gray-500 text-sm md:text-lg font-light dark:text-gray:900 text-center">
        E-commerce made simple, we care about your packages as if they were
        ours.
        <span className="hidden md:block">
          we care about your packages as if they were ours.
        </span>
      </h5>
      <div className="flex h-8 md:h-12 items-center relative max-w-xs w-full md:max-w-xl">
        <Select
          options={[
            { label: "Glasses", value: "Glasses" },
            { label: "Sockes", value: "Sockes" },
            { label: "Bikinis", value: "Bikinis" },
            { label: "Shoes", value: "Shoes" },
            { label: "T-Shirts", value: "T-Shirts" },
          ]}
          className=" h-8 md:h-10 absolute left-1 top-0 md:top-1"
          text={"Shoes"}
        />
        <Input className="pl-24 pr-10" placeholder="Search Vectors..." />
        <span className="text-white absolute right-5 top-0 h-full flex items-center leading-3">
          <svg
            width="20"
            height="20"
            className="dark:text-white text-gray-400"
            viewBox="0 0 20 20"
          >
            <path
              d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
              stroke="currentColor"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
            ></path>
          </svg>
        </span>
      </div>
    </section>
  );
};
export default Landing;
