import { useState } from 'react';
import Image from 'next/image';
import { BiX } from 'react-icons/bi';
import * as styles from '@/components/styles/ShapedImage.style';
import ImageModal from './ImageModal';

interface Props {
  size?: string;
  src: string;
  alt: string;
  hasModal?: boolean;
  onClickDelete?: () => void;
}

export default function ShapedImage({
  size = '100%',
  src,
  alt,
  hasModal = false,
  onClickDelete,
}: Props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <styles.ImageWrapper size={size}>
      <Image
        src={src}
        width={100}
        height={100}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          cursor: hasModal ? 'pointer' : 'default',
        }}
        onClick={hasModal ? () => setShowModal(true) : undefined}
      />
      {onClickDelete && (
        <styles.DeleteButton type="button" onClick={onClickDelete}>
          <BiX />
        </styles.DeleteButton>
      )}
      {hasModal && showModal && (
        <ImageModal src={src} onClose={() => setShowModal(false)} />
      )}
    </styles.ImageWrapper>
  );
}
