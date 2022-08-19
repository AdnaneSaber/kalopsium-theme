import React from "react";

type StartProps = {
  filled?: boolean;
  index?: number;
  percent?: number;
};
const Star: React.FC<StartProps> = ({ filled, index, percent = 100 }) => {
  return percent === 100 ? (
    <svg
      aria-hidden="true"
      className={`w-5 h-5 text-${filled ? "yellow" : "gray"}-300`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
  ) : (
    <div className="relative w-5 h-5">
      <div className="absolute inset-0 overflow-hidden">
        <svg
          aria-hidden="true"
          className={`w-5 h-5 z-10 text-gray-300`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      </div>
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: (percent * 20) / 100 }}
      >
        <svg
          aria-hidden="true"
          className={`w-5 h-5 z-20 text-yellow-300`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      </div>
    </div>
  );
};
const Stars: React.FC<{ count: number }> = ({ count }) => {
  return typeof count !== "undefined" ? (
    <>
      {Array.from({ length: Math.floor(count) }, (_, i) => (
        <Star filled index={i} key={i} />
      ))}
      {count % 1 !== 0 && (
        <Star filled percent={(count - Math.floor(count)) * 100} />
      )}
      {Array.from({ length: 5 - Math.ceil(count) }, (_, i) => (
        <Star index={i} key={i} />
      ))}

      <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
        {parseFloat(count.toString()).toFixed(1)}
      </span>
    </>
  ) : (
    <></>
  );
};
export default Stars;
