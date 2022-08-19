import Pill, { PillType } from "components/Pill";
type PillShowProps = {
  items?: Array<PillType>;
};

const PillShow: React.FC<PillShowProps> = ({ items }) => {
  const elements = items || [
    {
      path: "/products/shoes",
      title: "Shoes",
      icon: "👠",
    },
    {
      path: "/products/tshirts",
      title: "T-Shirts",
      icon: "👕",
    },
    {
      path: "/products/jeans",
      title: "Jeans",
      icon: "👖",
    },
  ];

  const mouseDownHandler = (e: MouseEvent) => {
    const ele = e.target as HTMLElement;
    const mouseMoveHandler = (e: MouseEvent) => {
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;
      ele.scrollTop = pos.top - dy;
      ele.scrollLeft = pos.left - dx;
    };
    const mouseUpHandler = () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
      ele.style.removeProperty("user-select");
    };
    const pos = {
      left: ele.scrollLeft,
      top: ele.scrollTop,
      x: e.clientX,
      y: e.clientY,
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };
  return (
    <div className="w-full border-y dark:border-gray-700 px-2 pr-0">
      <div
        onMouseDown={(e: any) => mouseDownHandler(e)}
        className="flex gap-3 overflow-x-scroll pt-5 pb-4 relative scrollbar pl-1 sm:pl-5 pr-0"
      >
        {[
          ...elements,
          ...elements,
          ...elements,
          ...elements,
          ...elements,
          ...elements,
          ...elements,
          ...elements,
          ...elements,
          ...elements,
          ...elements,
          ...elements,
          ...elements,
          ...elements,
          ...elements,
          ...elements,
          ...elements,
        ].map(({ path, title, icon }, index) => (
          <Pill
            key={index}
            callBack={() => {}}
            path={path}
            title={title}
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
};
export default PillShow;
