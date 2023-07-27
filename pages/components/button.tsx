import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  primary?: boolean;
  rounded?: boolean;
}

export default function Button({
  children,
  type = 'button',
  primary = true,
  rounded = false,
}: Props) {
  return (
    <StyledButton type={type} primary={primary} rounded={rounded}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ primary: boolean; rounded: boolean }>`
  width: 100%;
  height: 3rem;
  color: var(--color-white);
  background-color: ${(props) =>
    props.primary ? 'var(--color-main)' : 'var(--color-gray)'};
  border-radius: ${(props) =>
    props.rounded ? '2rem' : 'var(--border-radius)'};
`;
