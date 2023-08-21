import { ACTIONS, OPERATIONS } from "../other/symbols";

function isNumeric(num) {
  return !isNaN(parseFloat(num));
}

export function handleDisplaySubmit(display) {
  const splitDisplay = display.trim().split(" ");

  if (splitDisplay.length <= 2) return display;

  if (splitDisplay.length % 2 === 0) splitDisplay.pop();

  let result = parseFloat(splitDisplay[0]);

  for (let i = 1; i < splitDisplay.length - 1; i += 2) {
    if (splitDisplay[i] == "+") {
      result += parseFloat(splitDisplay[i + 1]);
    } else if (splitDisplay[i] == "-") {
      result -= parseFloat(splitDisplay[i + 1]);
    } else if (splitDisplay[i] == "×") {
      result *= parseFloat(splitDisplay[i + 1]);
    } else if (splitDisplay[i] == "÷") {
      result /= parseFloat(splitDisplay[i + 1]);
    }
  }

  return JSON.stringify(result);
}

export function handleDisplayInput(symbol, display) {
  const splitDisplay = display.trim().split(" ");
  const lastPart = splitDisplay[splitDisplay.length - 1];

  if (OPERATIONS.includes(symbol)) {
    if (display === "0" && symbol === "-") {
      return "-";
    }
    if (isNumeric(lastPart)) {
      splitDisplay.push(symbol);
      return splitDisplay.join(" ");
    }
  } else if (ACTIONS.includes(symbol)) {
    if (symbol === "DEL") {
      if (display.slice(0, display.length - 1).trim() === "") return "0";
      return display.slice(0, display.length - 1).trim();
    } else if (symbol === "C") {
      splitDisplay.pop();
      if (splitDisplay.join(" ") === "") return "0";
      return splitDisplay.join(" ");
    } else if (symbol === "AC") {
      return "0";
    }
  } else if (symbol === ".") {
    if (isNumeric(lastPart) && !lastPart.includes(".")) {
      splitDisplay[splitDisplay.length - 1] += symbol;
      return splitDisplay.join(" ");
    }
  } else if (isNumeric(symbol)) {
    if (isNumeric(lastPart) || display === "-") {
      if (lastPart === "0") {
        splitDisplay[splitDisplay.length - 1] = symbol;
      } else {
        splitDisplay[splitDisplay.length - 1] += symbol;
      }
      return splitDisplay.join(" ");
    } else {
      splitDisplay.push(symbol);
      return splitDisplay.join(" ");
    }
  }

  return display;
}
