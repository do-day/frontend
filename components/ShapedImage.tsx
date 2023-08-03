import Image from 'next/image';
import * as styles from '@/components/styles/ShapedImage.style';

interface Props {
  size?: string;
  src: string;
  alt: string;
}

export default function ShapedImage({ size = '100%', src, alt }: Props) {
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
    </styles.ImageWrapper>
  );
}
