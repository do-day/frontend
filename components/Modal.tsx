import styled from '@emotion/styled';
import { useRef } from 'react';

interface MProps {
  text: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Modal = ({ text, isOpen, setIsOpen }: MProps) => {
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const ment = useRef<string>();

  if (text.length > 6) ment.current = '신고 목록으로';
  else ment.current = `나의 ${text.slice(0, 2)} 목록`;

  return (
    <ModalContainer>
      <ModalBackdrop onClick={openModalHandler}>
        <ModalView onClick={(e) => e.stopPropagation()}>
          <ModalTitleBox>
            <ModalText>{text}</ModalText>
          </ModalTitleBox>
          <ModalButtonBox>
            <ModalLeftBtn>메인으로</ModalLeftBtn>
            <ModalRightBtn>{ment.current}</ModalRightBtn>
          </ModalButtonBox>
        </ModalView>
      </ModalBackdrop>
    </ModalContainer>
  );
};

const ModalContainer = styled.div``;

const ModalBackdrop = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ModalView = styled.div`
  width: 19.5rem;
  height: 11rem;
  background-color: white;
  &.fail {
    height: 120px;
  }
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const ModalTitleBox = styled.div`
  display: flex;
  margin: 2.5rem auto 0.1rem;
`;

const ModalText = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const ModalButtonBox = styled.div`
  display: flex;
  margin: 2.3rem auto 0;
`;

const ModalLeftBtn = styled.button`
  width: 7.5rem;
  border-radius: 10px;
  background-color: white;
  height: 2.7rem;
  border: 3px solid #0083cd;
  color: #0083cd;
  font-size: 16px;
  font-weight: 600;
`;

const ModalRightBtn = styled.button`
  width: 7.5rem;
  border-radius: 10px;
  height: 2.7rem;
  background-color: #0083cd;
  margin-left: 1.5rem;
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

export default Modal;
