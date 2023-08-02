import { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from '@/components/Modal';
import Button from '@/components/Button';
import * as styles from '@/components/styles/RejectModal.style';

interface RMProps {
  onClose: () => void;
}

const RejectModal = ({ onClose }: RMProps) => {
  const [isReject, setIsReject] = useState(false);

  const hanldeSubmit = () => {
    setIsReject(true);
  };

  return (
    <>
      {createPortal(
        <>
          {!isReject ? (
            <styles.Modal onClick={onClose}>
              <styles.ModalView onClick={(e) => e.stopPropagation()}>
                <styles.ModalText>반려사유</styles.ModalText>
                <styles.ModalContent
                  placeholder="반려 사유를 입력해 주세요."
                  rows={6}
                ></styles.ModalContent>
                <styles.ModalButtonBox>
                  <Button onClick={onClose} secondary>
                    취소하기
                  </Button>
                  <Button onClick={hanldeSubmit}>반려하기</Button>
                </styles.ModalButtonBox>
              </styles.ModalView>
            </styles.Modal>
          ) : (
            <Modal text={'반려 완료'} />
          )}
        </>,
        document.getElementById('modal-root') as HTMLElement,
      )}
    </>
  );
};

export default RejectModal;
