import Calculator from "./components/Calculator";
import ToggleDarkMode from "./components/ToggleDarkMode";
import { useDisplay } from "./contexts/displayContext";

function App() {
  const { isDarkMode } = useDisplay();

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="flex h-screen items-center justify-center dark:bg-slate-950">
        <Calculator />
        <ToggleDarkMode />
      </div>
    </div>
  );
}

export default App;
