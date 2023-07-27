import Head from 'next/head';
import { Inter } from 'next/font/google';
import * as styles from './main.style';
import Image from 'next/image';

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
        <styles.LogoBox>DO DAY</styles.LogoBox>
      </styles.Header>
      <styles.TopBox>
        <styles.TopTitleBox>신고목록</styles.TopTitleBox>
        <styles.TopDescriptionBox>
          해결하고 싶은 신고를 선택해 주세요.
        </styles.TopDescriptionBox>
      </styles.TopBox>
      <styles.SearchBox>
        <styles.Search>
          <input className="input" placeholder="검색"></input>
        </styles.Search>
      </styles.SearchBox>
      <styles.ListBox>
        <styles.PicBox></styles.PicBox>
        <styles.RightBox></styles.RightBox>
        <styles.ListTopBox>서울특별시 동작구 노량진로 10</styles.ListTopBox>
        <styles.ListBottomBox>
          <styles.ListDateBox>최초 신고일: 2023.07.01 18:30</styles.ListDateBox>
          <styles.ListTagBox>
            <styles.Tag>미해결</styles.Tag>
          </styles.ListTagBox>
        </styles.ListBottomBox>
      </styles.ListBox>
    </styles.Container>
  );
}
