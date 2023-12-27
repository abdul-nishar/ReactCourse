import HeaderImg from "../src/assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={HeaderImg} alt="Green bag with Dollar Sign" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
