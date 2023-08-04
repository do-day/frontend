import { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from '@/components/Modal';
import Button from '@/components/Button';
import * as styles from '@/components/styles/RejectModal.style';
import { useMutation } from '@tanstack/react-query';
import { rejectReport, rejectSolve } from '@/api/admin';

interface RMProps {
  reportId?: string;
  solutionId?: string;
  onClose: () => void;
}

const RejectModal = ({ onClose, reportId, solutionId }: RMProps) => {
  const [isReject, setIsReject] = useState(false);
  const [content, setContent] = useState('');

  const rejectReportMutation = useMutation({
    mutationFn: rejectReport,
    onSuccess: () => {
      setIsReject(true);
    },
  });

  const hanldeSubmit = () => {
    if (reportId !== undefined) {
      rejectReportMutation.mutate({
        reportId: Number(reportId),
        adminId: 1,
        content: content,
      });
    } else {
      rejectSolveMutation.mutate({
        solutionId: Number(solutionId),
        adminId: 1,
        content: content,
      });
    }
  };

  const rejectSolveMutation = useMutation({
    mutationFn: rejectSolve,
    onSuccess: () => {
      setIsReject(true);
    },
  });

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
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
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
