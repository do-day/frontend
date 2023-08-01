import { useRef } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/constants';
import * as styles from '@/components/styles/Modal.style';

interface MProps {
  text: string;
}

const Modal = ({ text }: MProps) => {
  const ment = useRef<string>();
  const link = useRef<string>('');

  if (text.length > 6) {
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
    <styles.ModalContainer>
      <styles.ModalBackdrop>
        <styles.ModalView onClick={(e) => e.stopPropagation()}>
          <styles.ModalTitleBox>
            <styles.ModalText>{text}</styles.ModalText>
          </styles.ModalTitleBox>
          <styles.ModalButtonBox>
            <Link href={ROUTES.MAIN}>
              <styles.ModalLeftBtn>메인으로</styles.ModalLeftBtn>
            </Link>
            <Link href={link.current}>
              <styles.ModalRightBtn>{ment.current}</styles.ModalRightBtn>
            </Link>
          </styles.ModalButtonBox>
        </styles.ModalView>
      </styles.ModalBackdrop>
    </styles.ModalContainer>
  );
};

export default Modal;
