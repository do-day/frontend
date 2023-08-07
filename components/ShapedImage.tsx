import Image from 'next/image';
import { BiX } from 'react-icons/bi';
import * as styles from '@/components/styles/ShapedImage.style';

interface Props {
  size?: string;
  src: string;
  alt: string;
  onClickDelete?: () => void;
}

export default function ShapedImage({
  size = '100%',
  src,
  alt,
  onClickDelete,
}: Props) {
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
        }}
      />
      {onClickDelete && (
        <styles.DeleteButton type="button" onClick={onClickDelete}>
          <BiX />
        </styles.DeleteButton>
      )}
    </styles.ImageWrapper>
  );
}
