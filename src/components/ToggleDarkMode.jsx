import { HiMoon, HiSun } from "react-icons/hi2";
import { useDisplay } from "../contexts/displayContext";

function ToggleDarkMode() {
  const { isDarkMode, setIsDarkMode } = useDisplay();

  return (
    <div className="fixed right-0 top-0 flex items-center gap-1 p-4 dark:text-slate-50">
      {isDarkMode ? (
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full text-4xl transition-all duration-300 hover:bg-slate-600"
          onClick={() => setIsDarkMode(false)}
        >
          <HiSun />
        </button>
      ) : (
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full text-3xl transition-all duration-300 hover:bg-slate-300"
          onClick={() => setIsDarkMode(true)}
        >
          <HiMoon />
        </button>
      )}
    </div>
  );
}

export default ToggleDarkMode;
