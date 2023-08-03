import styled from 'styled-components';



export const ModalOverlay = styled.div`
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
  color: black;
  padding: 50px 100px;
  button {
    border: 1px solid black;
    margin: 0px;
    margin-top: 10px;
  }


`;

export const ModalContainer = styled.div`
  background-color: #fff;
  padding: 40px 100px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  @keyframes fadein {
	from {
		opacity:0;
	}
	to {
		opacity:1;
	}
  }
  @keyframes fadeout {
	from {
		opacity:1;
	}
	to {
		opacity:0;
	}
  }
  animation:fadein 1s;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border:none;
  cursor: pointer;
  color: white;
`;
