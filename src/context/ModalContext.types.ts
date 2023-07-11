export interface ModalContextValue {
    openModals: string[];
    openModal: (modalId: string) => void;
    closeModal: (modalId: string) => void;
  }