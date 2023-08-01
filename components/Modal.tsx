import { createPortal } from 'react-dom';
import { useRef } from 'react';
import Button from '@/components/Button';
import { ROUTES } from '@/constants';
import * as styles from '@/components/styles/Modal.style';
import { useRouter } from 'next/router';

interface MProps {
  text: string;
}

const Modal = ({ text }: MProps) => {
  const router = useRouter();
  const ment = useRef<string>();
  const link = useRef<string>('');

  if (text.length > 4) {
    ment.current = '신고 목록으로';
    link.current = `${ROUTES.ADMIN.REPORTS}`;
  } else {
    if (text.slice(0, 2) === '보고') ment.current = `나의 해결 목록`;
    else {
      ment.current = `나의 ${text.slice(0, 2)} 목록`;
    }
    if (text.slice(0, 2) === '보고') link.current = `${ROUTES.MY.SOLVES}`;
    else if (text.slice(0, 2) === '신고') link.current = `${ROUTES.MY.REPORTS}`;
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
