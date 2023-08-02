import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/router';
import Button from '@/components/Button';
import { ROUTES } from '@/constants';
import * as styles from '@/components/styles/Modal.style';

interface MProps {
  text: string;
}

const Modal = ({ text }: MProps) => {
  const router = useRouter();
  const ment = useRef<string>();
  const link = useRef<string>('');

  const type = text.slice(0, 2);
  if (type === '승인') {
    ment.current = '신고 목록으로';
    link.current = `${ROUTES.ADMIN.REPORTS}`;
  } else {
    ment.current = type === '보고' ? `나의 해결 목록` : `나의 ${type} 목록`;
    link.current = type === '보고' ? ROUTES.MY.SOLVES : ROUTES.MY.REPORTS;
  }

  return (
    <>
      {createPortal(
        <styles.Modal>
          <styles.ModalView>
            <styles.ModalText>{text}</styles.ModalText>
            <styles.ModalButtonBox>
              <Button
                onClick={() => router.push(ROUTES.MAIN)}
                secondary
                fitContent
              >
                메인으로
              </Button>
              <Button onClick={() => router.push(link.current)} fitContent>
                {ment.current}
              </Button>
            </styles.ModalButtonBox>
          </styles.ModalView>
        </styles.Modal>,
        document.getElementById('modal-root') as HTMLElement,
      )}
    </>
  );
};

export default Modal;
