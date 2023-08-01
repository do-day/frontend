import { createPortal } from 'react-dom';
import * as styles from '@/components/styles/BottomModal.style';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

export default function BottomModal({ children, onClose }: Props) {
  return (
    <>
      {createPortal(
        <styles.BackDrop onClick={onClose} />,
        document.getElementById('modal-root') as HTMLElement,
      )}
      {createPortal(
        <styles.Modal>
          <styles.CloseBar onClick={onClose} />
          {children}
        </styles.Modal>,
        document.getElementById('modal-root') as HTMLElement,
      )}
    </>
  );
}
