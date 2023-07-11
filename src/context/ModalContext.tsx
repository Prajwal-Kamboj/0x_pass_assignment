import React, { createContext, FC, useContext, useState, useEffect } from 'react';
import { ModalContextValue } from './ModalContext.types';

const ModalContext = createContext<ModalContextValue | null>(null);

interface ModalProviderProps {
  children: React.ReactNode;
}

const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [openModals, setOpenModals] = useState<string[]>([]);

  const openModal = (modalId: string) => {
    setOpenModals(prevModals => [...prevModals, modalId]);
  };

  const closeModal = (modalId: string) => {
    setOpenModals(prevModals => prevModals.filter(id => id !== modalId));
  };

  const modalContextValue: ModalContextValue = {
    openModals,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider, ModalContext }