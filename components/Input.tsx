import * as styles from '@/components/styles/Input.style';
import { ForwardedRef, forwardRef } from 'react';

interface Props {
  type?: 'text' | 'password';
  label?: string;
  id?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input(
  { type = 'text', label, id, value, onChange }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <styles.InputWrapper>
      {label && <styles.Label htmlFor={id}>{label}</styles.Label>}
      <styles.Input
        type={type}
        id={id ? id : ''}
        value={value}
        onChange={onChange}
        ref={ref}
      ></styles.Input>
    </styles.InputWrapper>
  );
}

export default forwardRef<HTMLInputElement, Props>(Input);
