import * as styles from '@/components/styles/Backdrop.style';

interface Props {
  onClick?: () => void;
}

export default function Backdrop({ onClick }: Props) {
  return <styles.Backdrop onClick={onClick} />;
}
