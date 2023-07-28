import styled from '@emotion/styled';
import Image from 'next/image';

interface Props {
  size: string;
  src: string;
  alt: string;
}

export default function ShapedImage({ size, src, alt }: Props) {
  return (
    <ImageWrapper size={size}>
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
    </ImageWrapper>
  );
}

export const ImageWrapper = styled.div<{ size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  max-height: 8rem;

  & > img {
    border-radius: var(--border-radius);
  }
`;
