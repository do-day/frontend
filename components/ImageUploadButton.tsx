import styled from '@emotion/styled';
import { BiPlus } from 'react-icons/bi';

interface Props {
  size: string;
  onClick: () => void;
}

export default function ImageUploadButton({ size, onClick }: Props) {
  return (
    <Button type="button" size={size} onClick={onClick}>
      <BiPlus />
    </Button>
  );
}

export const Button = styled.button<{ size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  max-width: 9.5rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  background-color: var(--color-light-gray);
  cursor: pointer;

  & > svg {
    font-size: 2rem;
    color: var(--color-gray);
  }
`;
