import Buttons from "./Buttons";
import Display from "./Display";

function Calculator() {
  return (
    <div className="w-96 rounded-xl border bg-slate-50 p-8 shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:shadow-slate-800">
      <Display />
      <Buttons></Buttons>
    </div>
  );
}

export default Calculator;
