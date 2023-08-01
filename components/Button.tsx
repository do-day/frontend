import Image from 'next/image';
import * as styles from '@/components/styles/Button.style';

interface Props {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  logoImageUrl?: string;
  style?: React.CSSProperties;
  primary?: boolean;
  secondary?: boolean;
  rounded?: boolean;
  fitContent?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  children,
  type = 'button',
  logoImageUrl,
  style,
  primary = true,
  secondary = false,
  rounded = false,
  fitContent = false,
  onClick,
}: Props) {
  return (
    <styles.Button
      type={type}
      onClick={onClick}
      style={style}
      primary={primary}
      secondary={secondary}
      rounded={rounded}
      fitContent={fitContent}
    >
      {logoImageUrl && (
        <Image
          src={logoImageUrl}
          alt="logo"
          width={50}
          height={50}
          style={{ width: '1.5rem', height: '1.5rem' }}
        />
      )}
      <styles.ChildrenWrapper>{children}</styles.ChildrenWrapper>
    </styles.Button>
  );
}
