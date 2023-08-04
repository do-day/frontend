import Image from 'next/image';
import * as styles from '@/components/styles/CopyToast.style';
import { useEffect, useState } from 'react';

interface Props {
  style?: React.CSSProperties;
  rounded?: boolean;
  fitContent?: boolean;
  setCopy: (copy: boolean) => void;
}

export default function CopyToast({
  style,
  rounded = false,
  fitContent = false,
  setCopy,
}: Props) {
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
    <styles.ToastBox
      style={style}
      rounded={rounded}
      fitContent={fitContent}
      isFading={isFading}
    >
      <styles.FlexBox>
        <styles.Ment>복사가 완료되었습니다.</styles.Ment>
      </styles.FlexBox>
    </styles.ToastBox>
  );
}
