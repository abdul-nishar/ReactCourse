/* eslint-disable */
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import Button from "./Button";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="bg-zinc-950 p-8 rounded-md shadow-md backdrop:bg-stone-900/90"
    >
      {children}
      <form method="dialog" className="text-center mt-8">
        <Button
          text="Close"
          additionalClasses="text-stone-400 bg-stone-800 hover:text-zinc-950 hover:bg-amber-100 "
        />
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
