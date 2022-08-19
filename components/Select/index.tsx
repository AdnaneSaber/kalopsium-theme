import React, { FC, useEffect } from "react";
import { uniqueId } from "@Utils";

type SelectProps = {
  options: Array<{
    label: string;
    value: string | number;
  }>;
  value?: string | number;
  className?: string;
  text?: string;
};

const Select: FC<SelectProps> = ({ options, text, className }) => {
  const switchSelect = ({ target }: any) => {
    let _this = target;
    let theCase = _this.closest(".fdSelect").getAttribute("id");
    if (_this.classList.contains("fdSelect_Options_Option")) {
      let old = (
        document.querySelector(`#${theCase} > span`) as HTMLElement
      ).innerHTML.split(" ")[0];
      let now = (
        document.querySelector(`#${theCase} > span`) as HTMLElement
      ).innerHTML.replace(old, _this.textContent.trim());
      (document.querySelector(`#${theCase} > span`) as HTMLElement).innerHTML =
        now;
    }
    if (_this.classList.contains("fdSelect")) {
      _this.classList.contains("active")
        ? _this.classList.remove("active")
        : _this.classList.add("active");
    } else {
      _this.parentElement.classList.contains("active")
        ? _this.parentElement.classList.remove("active")
        : _this.parentElement.classList.add("active");
    }
  };
  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const her =
        target.tagName === "HTML" ||
        (!target.classList.contains("fdSelect") &&
          !(target.parentElement as HTMLElement).classList.contains(
            "fdSelect"
          ));
      const allSelects = document.querySelectorAll(".fdSelect");
      if (her) {
        allSelects.forEach((e) => {
          e.classList.remove("active");
        });
      }
    };
    document.addEventListener("click", (ev: MouseEvent) => clickHandler(ev));
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  });
  return (
    <div
      id={uniqueId("select-")}
      className={
        "fdSelect bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none w-20 cursor-pointer flex justify-center items-center" +
        " " +
        className
      }
      onClick={switchSelect}
    >
      <span className="text-xs md:text-base">{text}</span>
      <i className="fa fa-chevron-down" aria-hidden="true"></i>
      <div id="fdSelect_Options" className="dark:bg-gray-700 bg-gray-50">
        {options.map((el, index) => (
          <span
            className="fdSelect_Options_Option text-gray-900 rounded-md dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-50 hover:text-gray-50 dark:hover:text-gray-500 dark:text-white sm:text-sm outline-none"
            key={index}
            id={uniqueId("option-")}
          >
            {`${el.value}`}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Select;
