import { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const ModalBody = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
`;

const Modal = ({ children }) => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <button onClick={() => setShouldShow(true)}>
        Show Modal
      </button>

      {
        shouldShow && (
          <ModalBackground onClick={() => setShouldShow(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShouldShow(false)}>
                Hide Modal
              </button>
              { children }
            </ModalBody>
          </ModalBackground>
        )
      }
    </>
  );
};

export default Modal;