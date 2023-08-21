import { useDisplay } from "../contexts/displayContext";
import { handleDisplayInput, handleDisplaySubmit } from "../logic/displayLogic";

function handleDisplay(e, setDisplay) {
  setDisplay((display) => {
    let symbol = e.target.value[e.target.value.length - 1];
    if (e.target.value.length < display.length) {
      symbol = "DEL";
    } else if (symbol === "C") {
      symbol = "";
    } else if (symbol === "/") {
      symbol = "÷";
    } else if (symbol === "*") {
      symbol = "×";
    }

    return handleDisplayInput(symbol, display);
  });
}

function handleSubmit(e, setDisplay) {
  e.preventDefault();
  setDisplay((display) => {
    return handleDisplaySubmit(display);
  });
}

function Display() {
  const { display, setDisplay, inputRef } = useDisplay();

  return (
    <form onSubmit={(e) => handleSubmit(e, setDisplay)}>
      <input
        className="mb-8 h-24 w-full rounded-3xl border px-4 text-right text-xl font-medium caret-transparent focus:border-slate-400 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50 dark:focus:border-slate-500"
        type="text"
        ref={inputRef}
        value={display}
        onChange={(e) => handleDisplay(e, setDisplay)}
      />
    </form>
  );
}

export default Display;
