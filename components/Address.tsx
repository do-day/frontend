import { useState } from 'react';
import { BiCopyAlt } from 'react-icons/bi';
import { useDebounce } from '@/hooks/useDebounce';
import Toast from '@/components/Toast';
import * as styles from '@/components/styles/Address.style';

interface Props {
  address: string;
  isCopyable?: boolean;
}

export default function Address({ address, isCopyable = false }: Props) {
  const [copy, setCopy] = useState(false);

  const handleClickCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopy(!copy);
    } catch (error) {
      console.error('클립보드 복사 에러:', error);
      // 복사 실패 시 예외 처리
    }
  };

  const debounceCopy = useDebounce<React.MouseEventHandler<HTMLButtonElement>>(
    handleClickCopy,
    500,
  );

  if (!isCopyable) {
    return <styles.Address>{address}</styles.Address>;
  }

  return (
    <>
      <styles.CopyButton type="button" onClick={debounceCopy}>
        <styles.Address>{address}</styles.Address>
        <BiCopyAlt />
      </styles.CopyButton>
      {copy && <Toast setCopy={setCopy} text="복사가 완료되었습니다." />}
    </>
  );
}
