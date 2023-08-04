import * as styles from '@/components/styles/Input.style';

interface Props {
  type?: 'text' | 'password';
}

export default function Input({ type = 'text' }: Props) {
  return <styles.Input type={type}></styles.Input>;
}
