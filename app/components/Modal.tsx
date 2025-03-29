import React from "react";

interface IModalProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

function Modal(props: IModalProps) {
  return (
    <dialog
      id="my_modal_3"
      className={`modal ${props.modalOpen ? "modal-open" : ""}`}
    >
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => props.setModalOpen(false)}
          >
            ✕
          </button>
        </form>
        {props.children}
      </div>
    </dialog>
  );
}

export default Modal;
