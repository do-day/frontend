import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  primary?: boolean;
  secondary?: boolean;
  rounded?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  children,
  type = 'button',
  primary = true,
  secondary = false,
  rounded = false,
  onClick,
}: Props) {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      primary={primary}
      secondary={secondary}
      rounded={rounded}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<{
  primary: boolean;
  secondary: boolean;
  rounded: boolean;
}>`
  width: 100%;
  height: 3rem;
  color: var(--color-white);
  background-color: ${(props) =>
    props.secondary ? 'var(--color-gray)' : 'var(--color-main)'};
  border-radius: ${(props) =>
    props.rounded ? '2rem' : 'var(--border-radius)'};
  font-weight: var(--font-semibold);
`;
