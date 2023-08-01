import Link from 'next/link';
import * as styles from '@/components/styles/Tab.style';

interface TProps {
  list: Array<string>;
  order: string;
  link: Array<string>;
}

const Tab = ({ list, order, link }: TProps) => {
  return (
    <styles.TabBox>
      {order === '0' ? (
        <>
          <Link href={link[0]}>
            <styles.LeftBox border={'0'}>{list[0]}</styles.LeftBox>
          </Link>
          <Link href={link[1]}>
            <styles.RightBox border={'0'}>{list[1]}</styles.RightBox>
          </Link>
        </>
      ) : (
        <>
          <Link href={link[0]}>
            <styles.LeftBox border={'1'}>{list[0]}</styles.LeftBox>
          </Link>

          <Link href={link[1]}>
            <styles.RightBox border={'1'}>{list[1]}</styles.RightBox>
          </Link>
        </>
      )}
    </styles.TabBox>
  );
};

export default Tab;
