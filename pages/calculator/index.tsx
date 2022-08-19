import { useState, useEffect } from "react";
import { Input } from "../../components";

const Calculator = () => {
  const [text, setText] = useState(0);
  const [stripFee, setStripFee] = useState(0);
  useEffect(() => {
    setStripFee(calculate(text));
  }, [text]);
  const calculate = (price: number) => {
    return (price * 2.9) / 100 + 0.3;
  };
  const complex = (price: number) => {
    const res = calculate(text + calculate(text));
    return price + res;
  };
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <Input
        placeholder="Price"
        type="text"
        className="h-8 border rounded-sm"
        onChange={(e) => setText(Number(e.target.value))}
      />
      <div className="flex gap-8 p-8">
        <div className="flex flex-col gap-2">
          <h3>Stripe fee</h3>
          <span className="text-center">${text && stripFee.toFixed(2)}</span>
        </div>
        <div className="flex flex-col gap-2">
          <h3>You will receive</h3>
          <span className="text-center">
            ${text && (text - stripFee).toFixed(2)}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h3>You should ask for</h3>
          <span className="text-center">
            ${text && complex(text).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
