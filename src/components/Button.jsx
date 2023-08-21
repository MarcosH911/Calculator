import { HiBackspace, HiOutlineBackspace } from "react-icons/hi2";
import { useDisplay } from "../contexts/displayContext";
import { handleDisplayInput, handleDisplaySubmit } from "../logic/displayLogic";

const colors = {
  primary:
    "bg-white hover:bg-slate-100 active:border-none active:shadow-none dark:bg-slate-600 dark:hover:bg-slate-500 dark:hover:border-slate-400",
  secondary:
    "bg-slate-200 hover:bg-slate-300 active:border-none active:shadow-none dark:bg-slate-800 dark:hover:bg-slate-700",
  important:
    "bg-sky-400 hover:bg-sky-500 active:border-none active:shadow-none dark:bg-sky-600 dark:hover:bg-sky-500",
};

function handleClick(symbol, setDisplay, inputRef) {
  setDisplay((display) => {
    if (symbol === "=") {
      return handleDisplaySubmit(display);
    } else {
      return handleDisplayInput(symbol, display);
    }
  });

  inputRef.current.focus();
}

function Button({ symbol, type }) {
  const { setDisplay, inputRef } = useDisplay();

  return (
    <button
      className={`flex items-center justify-center rounded-lg border border-stone-200 shadow-sm transition-all duration-100 dark:border-slate-500 dark:text-slate-50 dark:shadow-slate-700 ${colors[type]}`}
      onClick={() => handleClick(symbol, setDisplay, inputRef)}
    >
      {symbol !== "DEL" ? symbol : <HiOutlineBackspace className="text-lg" />}
    </button>
  );
}

export default Button;
