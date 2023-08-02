import * as styles from '@/components/styles/Container.style';

interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Props) {
  return <styles.Main>{children}</styles.Main>;
}
