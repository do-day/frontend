import Link from 'next/link';
import Image from 'next/image';
import Tag from '@/components/Tag';
import { formatDate } from '@/utils';
import { DEFAULT_IMAGE } from '@/constants';
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
        <styles.ImageBox>
          <Image
            src={thumbnail || DEFAULT_IMAGE}
            alt="썸네일"
            width={150}
            height={150}
            sizes="150px"
            priority
          />
        </styles.ImageBox>
        <styles.RightBox>
          <Tag state={state || 'UNRESOLVED'} />
          <styles.ListTitle>{title}</styles.ListTitle>
          <styles.ListDate>{date && formatDate(date)}</styles.ListDate>
        </styles.RightBox>
      </styles.ListBox>
    </Link>
  );
}
