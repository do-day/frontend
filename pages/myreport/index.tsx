import Head from 'next/head';
import { Inter } from 'next/font/google';
import * as styles from './myreport.style';
import Image from 'next/image';
import AlertList from '@/common/AlertList';
import { useState } from 'react';

export interface TabDirection {
  border: boolean;
}

export default function Home() {
  const [tab, setTab] = useState<boolean>(true);
  const handleOnClick = () => {
    setTab(!tab);
  };
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
        <styles.LogoBox>DO DAY</styles.LogoBox>
      </styles.Header>
      <styles.TabBox>
        <styles.LeftBox border={tab} onClick={handleOnClick}>
          나의 신고 목록
        </styles.LeftBox>
        <styles.RightBox border={tab} onClick={handleOnClick}>
          나의 해결 목록
        </styles.RightBox>
      </styles.TabBox>

      {/** TODO: 데이터 map형태로 바꾸기 */}
      <AlertList />
      <AlertList />
      <AlertList />
      <AlertList />
    </styles.Container>
  );
}
