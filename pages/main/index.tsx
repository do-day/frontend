import Head from 'next/head';
import { Inter } from 'next/font/google';
import * as styles from './main.style';
import Image from 'next/image';
import AlertList from '@/common/AlertList';

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
      {/** TODO: 데이터 map형태로 바꾸기 */}
      <AlertList />
      <AlertList />
      <AlertList />
      <AlertList />
      <styles.WriteAbsoluteBox>
        <styles.WriteFlexBox>
          <styles.WriteIcon>
            <Image
              src="/write.svg"
              alt="write pencil"
              width={25}
              height={25}
              priority
            />
          </styles.WriteIcon>
          <styles.WriteTxt>신고하기</styles.WriteTxt>
        </styles.WriteFlexBox>
      </styles.WriteAbsoluteBox>
    </styles.Container>
  );
}
