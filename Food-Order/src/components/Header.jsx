import DefaultBtn2 from "./DefaultButton2";

export default function Header({ items, openModal }) {
  return (
    <main id="main-header">
      <title id="title">
        <img src="logo.jpg" />
        <h1>REACTFOOD</h1>
      </title>
      <DefaultBtn2 className="text-button" onClick={openModal}>
        Cart ({items})
      </DefaultBtn2>
    </main>
  );
}
