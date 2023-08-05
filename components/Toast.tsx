import { useEffect, useState } from 'react';
import * as styles from '@/components/styles/Toast.style';
import { createPortal } from 'react-dom';

interface Props {
  text: string;
  setCopy: (copy: boolean) => void;
}

export default function Toast({ text, setCopy }: Props) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let mounted = true;
    setTimeout(() => {
      if (mounted) {
        setIsFading(true);
      }
    }, 2000);
    setTimeout(() => {
      setCopy(false);
    }, 2500);

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      {createPortal(
        <styles.ToastBox isFading={isFading}>
          <styles.FlexBox>
            <styles.Ment>{text}</styles.Ment>
          </styles.FlexBox>
        </styles.ToastBox>,
        document.getElementById('modal-root') as HTMLElement,
      )}
    </>
  );
}
