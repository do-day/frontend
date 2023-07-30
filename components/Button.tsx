import Image from 'next/image';
import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  logoImageUrl?: string;
  style?: React.CSSProperties;
  primary?: boolean;
  secondary?: boolean;
  rounded?: boolean;
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
  onClick,
}: Props) {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      style={style}
      primary={primary}
      secondary={secondary}
      rounded={rounded}
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
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </StyledButton>
  );
}

const StyledButton = styled.button<{
  style?: React.CSSProperties;
  primary: boolean;
  secondary: boolean;
  rounded: boolean;
}>`
  width: 100%;
  height: 3rem;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: between;
  align-items: center;
  font-weight: var(--font-semibold);
  color: var(--color-white);
  background-color: ${(props) =>
    props.secondary ? 'var(--color-gray)' : 'var(--color-main)'};
  border-radius: ${(props) =>
    props.rounded ? '2rem' : 'var(--border-radius)'};

  ${(props) => props.style && String(props.style)}
`;

const ChildrenWrapper = styled.div`
  flex: 1 1 0%;
  line-height: 3rem;
`;
