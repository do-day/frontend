import styled from '@emotion/styled';
import { useState } from 'react';
import Modal from './Modal';
import Image from 'next/image';

interface RMProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const RejectModal = ({ isOpen, setIsOpen }: RMProps) => {
  const [isReject, setIsReject] = useState(false);
  const hanldeonClickbtn = () => {
    setIsReject(true);
  };

  const Backdrop = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ModalContainer>
      {isOpen && !isReject ? (
        <ModalBackdrop onClick={Backdrop}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <ModalTitleBox>
              <ModalText>반려사유</ModalText>
              <ModalCloseBox onClick={Backdrop}>
                <Image
                  src="/close.svg"
                  alt="goback"
                  width={16}
                  height={16}
                  priority
                />
              </ModalCloseBox>
            </ModalTitleBox>
            <ModalContentBox>
              <ModalContent placeholder="반려 사유를 입력해주세요"></ModalContent>
            </ModalContentBox>
            <ModalButtonBox>
              <ModalButton onClick={hanldeonClickbtn}>입력완료</ModalButton>
            </ModalButtonBox>
          </ModalView>
        </ModalBackdrop>
      ) : isReject ? (
        <Modal text={'반려하였습니다.'} />
      ) : (
        ''
      )}
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
  height: 15rem;
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
  margin: 1rem 1rem 0 1rem;
`;

const ModalCloseBox = styled.div`
  margin-left: auto;
`;

const ModalText = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const ModalContentBox = styled.div`
  margin: 0.5rem 1rem;
`;

const ModalContent = styled.textarea`
  margin: auto;
  width: 17.5rem;
  height: 8rem;
  background-color: #ededed;
  border: none;
  border-radius: 5px;
  padding: 10px;
`;

const ModalButtonBox = styled.div`
  display: flex;
`;

const ModalButton = styled.button`
  width: 5.2rem;
  border-radius: 10px;
  height: 2.2rem;
  background-color: #0083cd;
  margin-left: auto;
  margin-right: 1rem;
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

export default RejectModal;
