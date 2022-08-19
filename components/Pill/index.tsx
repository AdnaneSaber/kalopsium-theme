import Image from "next/image";
import Link from "next/link";

export type PillType = {
  path: string;
  title: string;
  icon: string;
  callBack?: () => void;
};
const Pill: React.FC<PillType> = ({ icon, title, path, callBack }) => {
  return (
    <div className="shadow-md px-2 py-1 border border-gray-100 rounded-2xl dark:bg-gray-700 hover:shadow-lg hover:border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-600 dark:hover:border-gray-500">
      {path ? (
        <Link href={path}>
          <a className="flex items-center justify-center gap-2">
            {typeof icon === "object" ? (
              <Image src={icon} alt="" />
            ) : (
              <SpanText text={icon} />
            )}
            <SpanText text={title} />
          </a>
        </Link>
      ) : (
        <button onClick={callBack}>
          {typeof icon === "object" ? (
            <Image src={icon} alt="" />
          ) : (
            <SpanText text={icon} />
          )}
          <SpanText text={title} />
        </button>
      )}
    </div>
  );
};
const SpanText = ({ text }: { text: string }) => {
  return (
    <span className="font-lg whitespace-nowrap text-gray-500 text-sm leading-relaxed dark:text-gray-50 select-none">
      {text}
    </span>
  );
};
export default Pill;
