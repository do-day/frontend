import { useState } from 'react';
import Image from 'next/image';
import Modal from '@/components/Modal';
import * as styles from '@/components/styles/RejectModal.style';

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
    <styles.ModalContainer>
      {isOpen && !isReject ? (
        <styles.ModalBackdrop onClick={Backdrop}>
          <styles.ModalView onClick={(e) => e.stopPropagation()}>
            <styles.ModalTitleBox>
              <styles.ModalText>반려사유</styles.ModalText>
              <styles.ModalCloseBox onClick={Backdrop}>
                <Image
                  src="/close.svg"
                  alt="goback"
                  width={16}
                  height={16}
                  priority
                />
              </styles.ModalCloseBox>
            </styles.ModalTitleBox>
            <styles.ModalContentBox>
              <styles.ModalContent placeholder="반려 사유를 입력해주세요"></styles.ModalContent>
            </styles.ModalContentBox>
            <styles.ModalButtonBox>
              <styles.ModalButton onClick={hanldeonClickbtn}>
                입력완료
              </styles.ModalButton>
            </styles.ModalButtonBox>
          </styles.ModalView>
        </styles.ModalBackdrop>
      ) : isReject ? (
        <Modal text={'반려하였습니다.'} />
      ) : (
        ''
      )}
    </styles.ModalContainer>
  );
};

export default RejectModal;
