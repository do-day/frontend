import Link from 'next/link';
import ShapedImage from '@/components/ShapedImage';
import Tag from '@/components/Tag';
import { State } from '@/types';
import * as styles from '@/components/styles/ListItem.style';

interface Props {
  href: string;
  thumbnail: string;
  state?: State;
  title: string;
  date?: string;
}

export default function ListItem({
  href,
  thumbnail,
  state,
  title,
  date,
}: Props) {
  return (
    <Link href={href}>
      <styles.ListBox>
        <ShapedImage src={thumbnail} alt="썸네일" size="5rem" />
        <styles.RightBox>
          <Tag state={state || 'UNRESOLVED'} />
          <styles.ListTitle>{title}</styles.ListTitle>
          <styles.ListDate>{date}</styles.ListDate>
        </styles.RightBox>
      </styles.ListBox>
    </Link>
  );
}
