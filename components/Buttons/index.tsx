import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
}
const Button: React.FC<ButtonProps> = ({ children, primary, className, ...props }) => {
  const secondaryClasses =
    "w-full text-gray-900 gap-x-2 border flex items-center justify-center border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 font-medium text-sm px-5 py-2.5 text-center";
  const primaryClasses =
    "w-full text-white gap-x-2 bg-primary-600 flex items-center justify-center hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800";
  let classes = primary ? primaryClasses : secondaryClasses;
  classes = [...classes.split(' '), ...(className || "").split(' ')].join(' ');
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export default Button;
