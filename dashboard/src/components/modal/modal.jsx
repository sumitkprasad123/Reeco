import React from 'react';
import styled from 'styled-components';


const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px); 
`;
const Modal = ({ children }) => {
  return<>
     <Backdrop/>
     <ModalWrapper>{children}</ModalWrapper>;
  </> 
};

export default Modal;