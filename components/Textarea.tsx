import styled from '@emotion/styled';

interface Props {
  rows?: number;
  placeholder?: string;
}

export default function Textarea({ rows, placeholder }: Props) {
  return (
    <StyledTextarea rows={rows} placeholder={placeholder}></StyledTextarea>
  );
}

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  resize: none;
  background-color: var(--color-light-gray);
  border-radius: var(--border-radius);
  border: none;
`;
