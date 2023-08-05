import Link from 'next/link';
import * as styles from '@/components/styles/Tab.style';

interface TProps {
  list: Array<string>;
  order?: number;
  link: Array<string>;
}

const Tab = ({ list, order = 0, link }: TProps) => {
  return (
    <styles.TabBox>
      {list.map((item, index) => (
        <Link href={link[index]} key={index}>
          <styles.Tab active={index === order}>{item}</styles.Tab>
        </Link>
      ))}
    </styles.TabBox>
  );
};

export default Tab;
