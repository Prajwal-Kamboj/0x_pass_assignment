'use client'

import React, { FC, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { ModalContext } from '@/src/context/ModalContext';
import { ModalContextValue } from '@/src/context/ModalContext.types';
import { ModalOverlay, ModalCloseButton, ModalContainer } from './Modal.styles'


interface ModalProps {
  id: string;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ id, children }) => {
  const { openModals, closeModal } = useContext(ModalContext) as ModalContextValue;
  const isOpen = openModals.includes(id);
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal(id);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, id, closeModal]);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay onClick={()=> closeModal(id)}>
      <ModalContainer>
        <ModalCloseButton onClick={()=> closeModal(id)}>Close</ModalCloseButton>
        {children}
      </ModalContainer>
    </ModalOverlay>
  );
};

export {  Modal };

