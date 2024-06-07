import React from 'react';
import { XCircleIcon } from 'lucide-react';
type ModalProps = {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ show, onClose, children }: ModalProps) => {
  React.useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="modal-container" onClick={onClose}>
      <XCircleIcon
        onClick={onClose}
        className="modal-closeBtn"
        color="#f00"
      />
      <div
        className="modal-wrapper"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
