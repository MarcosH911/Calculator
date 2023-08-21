import Button from "./Button";

function Buttons() {
  return (
    <main className="grid h-80 w-full grid-cols-4 grid-rows-5 gap-2 p-1">
      <Button symbol="AC" type="secondary" />
      <Button symbol="C" type="secondary" />
      <Button symbol="DEL" type="secondary" />
      <Button symbol="÷" type="secondary" />
      <Button symbol="7" type="primary" />
      <Button symbol="8" type="primary" />
      <Button symbol="9" type="primary" />
      <Button symbol="×" type="secondary" />
      <Button symbol="4" type="primary" />
      <Button symbol="5" type="primary" />
      <Button symbol="6" type="primary" />
      <Button symbol="-" type="secondary" />
      <Button symbol="1" type="primary" />
      <Button symbol="2" type="primary" />
      <Button symbol="3" type="primary" />
      <Button symbol="+" type="secondary" />
      <Button symbol=" " type="primary" />
      <Button symbol="0" type="primary" />
      <Button symbol="." type="primary" />
      <Button symbol="=" type="important" />
    </main>
  );
}

export default Buttons;
