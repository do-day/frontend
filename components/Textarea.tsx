import styled from '@emotion/styled';

interface Props {
  rows?: number;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
}

export default function Textarea({
  rows,
  placeholder,
  disabled = false,
  value,
}: Props) {
  return (
    <StyledTextarea
      rows={rows}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
    ></StyledTextarea>
  );
}

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  resize: none;
  background-color: var(--color-light-gray);
  border-radius: var(--border-radius);
  border: none;
  font-size: var(--font-small);
`;
