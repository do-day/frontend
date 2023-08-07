import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useMutation } from '@tanstack/react-query';
import { rejectReport, rejectSolve } from '@/api/admin';
import Modal from '@/components/Modal';
import Button from '@/components/Button';
import Textarea from '@/components/Textarea';
import * as styles from '@/components/styles/RejectModal.style';

interface RMProps {
  reportId?: number;
  solutionId?: number;
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

  const rejectSolveMutation = useMutation({
    mutationFn: rejectSolve,
    onSuccess: () => {
      setIsReject(true);
    },
  });

  const hanldeSubmit = () => {
    if (reportId !== undefined) {
      rejectReportMutation.mutate({
        reportId,
        adminId: Number(process.env.NEXT_PUBLIC_ADMIN_ID),
        content,
      });
    } else if (solutionId !== undefined) {
      rejectSolveMutation.mutate({
        solutionId,
        adminId: Number(process.env.NEXT_PUBLIC_ADMIN_ID),
        content,
      });
    }
  };

  return (
    <>
      {createPortal(
        <>
          {!isReject ? (
            <styles.Modal onClick={onClose}>
              <styles.ModalView onClick={(e) => e.stopPropagation()}>
                <styles.ModalText>반려사유</styles.ModalText>
                <Textarea
                  placeholder="반려 사유를 입력해 주세요."
                  rows={6}
                  onChange={(value) => setContent(value)}
                ></Textarea>
                <styles.ModalButtonBox>
                  <Button onClick={onClose} secondary>
                    취소하기
                  </Button>
                  <Button onClick={hanldeSubmit}>반려하기</Button>
                </styles.ModalButtonBox>
              </styles.ModalView>
            </styles.Modal>
          ) : (
            <Modal
              text={'반려 완료'}
              isReport={reportId === undefined ? false : true}
            />
          )}
        </>,
        document.getElementById('modal-root') as HTMLElement,
      )}
    </>
  );
};

export default RejectModal;
