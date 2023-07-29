import Head from 'next/head';
import { Inter } from 'next/font/google';
import * as styles from './reward.style';
import Image from 'next/image';
import ReportList from '@/common/ReportList';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <styles.Container>
      <styles.Header>
        <styles.MenuBox>
          <Image
            src="/Header/menu.svg"
            alt="goback"
            width={25}
            height={25}
            priority
          />
        </styles.MenuBox>
        <styles.LogoBox>리워드</styles.LogoBox>
      </styles.Header>
    </styles.Container>
  );
}
