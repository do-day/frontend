import { createPortal } from 'react-dom';
import Backdrop from '@/components/Backdrop';
import * as styles from '@/components/styles/BottomModal.style';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

export default function BottomModal({ children, onClose }: Props) {
  return (
    <>
      {createPortal(
        <Backdrop onClick={onClose} />,
        document.getElementById('modal-root') as HTMLElement,
      )}
      {createPortal(
        <styles.Modal>
          <styles.CloseBar onClick={onClose} aria-label="닫기" />
          {children}
        </styles.Modal>,
        document.getElementById('modal-root') as HTMLElement,
      )}
    </>
  );
}
