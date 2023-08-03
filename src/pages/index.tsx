'use client'
import React, {useContext} from 'react';
import { Modal } from '../components/Modal';
import { ModalContext } from '../context/ModalContext';
import { ModalContextValue } from '../context/ModalContext.types';
import { Wrapper, Tittle, Text, Button, ModalButton } from './modal.styles';

const App = () => {
  const {openModal, closeModal, openModals} = useContext(ModalContext) as ModalContextValue;
  console.log(openModals)

  return (
    <Wrapper>
        <div>
        Connect to metamask
        </div>
        <Button onClick={() => openModal('modal1')}>Open Modal 1</Button>

      <Modal id="modal1">
        <Tittle>Modal 2 Title</Tittle>
        <Text>Random text for Modal 2</Text>
        <ModalButton onClick={() => closeModal('modal1')}>Confirm</ModalButton>
      </Modal>
    </Wrapper>
  );
};

export default App;