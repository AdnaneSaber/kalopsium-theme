interface inputType extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<inputType> = (props) => {
  const { className, placeholder } = props;
  return (
    <input
      {...props}
      className={
        "h-full bg-gray-50 max-h-12 px-4 border border-gray-300 text-gray-900 text-xs md:text-base rounded-md md:rounded-lg focus:ring-primary-600 focus:border-gray-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" +
        " " +
        className
      }
      placeholder={placeholder}
    />
  );
};
export default Input;
