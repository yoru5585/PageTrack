import { X } from "lucide-react";
import type { ReactNode } from "react";
import "./modal-generater.css";

type ModalProps = {
  isOpen: boolean,
  onClose: () => void,
  children: ReactNode,
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={20}/></button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
