import { createPortal } from 'react-dom';
import Image from 'next/image';
import { BiX } from 'react-icons/bi';
import * as styles from '@/components/styles/ImageModal.style';

interface Props {
  src: string;
  onClose: () => void;
}

export default function ImageModal({ src, onClose }: Props) {
  return (
    <>
      {createPortal(
        <styles.Modal onClick={onClose}>
          <styles.Content>
            <styles.Header>
              <styles.Title>전체보기</styles.Title>
              <styles.CloseButton onClick={onClose}>
                <BiX />
              </styles.CloseButton>
            </styles.Header>
            <Image
              src={src}
              alt="전체 이미지"
              width={500}
              height={500}
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </styles.Content>
        </styles.Modal>,
        document.getElementById('modal-root') as HTMLElement,
      )}
    </>
  );
}
