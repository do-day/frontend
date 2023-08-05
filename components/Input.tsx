import * as styles from '@/components/styles/Input.style';

interface Props {
  type?: 'text' | 'password';
  label?: string;
  id?: string;
}

export default function Input({ type = 'text', label, id }: Props) {
  return (
    <styles.InputWrapper>
      {label && <styles.Label htmlFor={id}>{label}</styles.Label>}
      <styles.Input type={type} id={id ? id : ''}></styles.Input>
    </styles.InputWrapper>
  );
}
