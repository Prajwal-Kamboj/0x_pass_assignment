'use client'

import React, { FC, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { ModalContext } from '@/src/context/ModalContext';
import { ModalContextValue } from '@/src/context/ModalContext.types';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

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
    <ModalOverlay>
      <ModalContainer>
        <ModalCloseButton onClick={()=> closeModal(id)}>Close</ModalCloseButton>
        {children}
      </ModalContainer>
    </ModalOverlay>
  );
};

export {  Modal };

