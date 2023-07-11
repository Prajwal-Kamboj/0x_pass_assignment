'use client'
import React, {useContext} from 'react';
import { Modal } from '../../components/Modal';
import { ModalContext } from '../../context/ModalContext';
import { ModalContextValue } from '../../context/ModalContext.types';

const App = () => {
  const {openModal, closeModal, openModals} = useContext(ModalContext) as ModalContextValue;
  console.log(openModals)

  return (
    <>
      <div>
        <button onClick={() => openModal('modal1')}>Open Modal 1</button>
        <button onClick={() => openModal('modal2')}>Open Modal 2</button>
        <button onClick={() => openModal('modal3')}>Open Modal 3</button>
        <button onClick={() => openModal('modal4')}>Open Modal 4</button>
      </div>

      <Modal id="modal1">
        <h2>Modal 1 Title</h2>
        <p>Random text for Modal 1</p>
        <button onClick={() => closeModal('modal1')}>Confirm</button>
      </Modal>

      <Modal id="modal2">
        <h2>Modal 2 Title</h2>
        <p>Random text for Modal 2</p>
        <button onClick={() => closeModal('modal2')}>Confirm</button>
      </Modal>

      <Modal id="modal3">
        <h2>Modal 3 Title</h2>
        <p>Random text for Modal 3</p>
        <button onClick={() => closeModal('modal3')}>Confirm</button>
      </Modal>

      <Modal id="modal4">
        <h2>Modal 4 Title</h2>
        <p>Random text for Modal 4</p>
        <button onClick={() => closeModal('modal4')}>Confirm</button>
      </Modal>
    </>
  );
};

export default App;