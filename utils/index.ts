export const respTemp = (
  data: object | Array<any>,
  success: boolean,
  message: string
) => {
  const success_template = {
    status: "success",
    message,
  };
  const error_template = {
    status: "error",
    message,
  };
  const result = success
    ? { ...success_template, ...data }
    : { ...error_template, ...data };
  return result;
};

export const toggleTheme = () => {
  const colorScheme = localStorage.getItem("colorScheme");
  if (colorScheme === "dark") {
    localStorage.setItem("colorScheme", "light");
    document.body.className = "light";
  } else {
    localStorage.setItem("colorScheme", "dark");
    document.body.className = "dark";
  }
};
export const uniqueId = (prefix = "id-") =>
  prefix + Math.random().toString(16).slice(-4);
