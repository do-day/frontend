import Head from 'next/head';
import { Inter } from 'next/font/google';
import * as styles from './main.style';
import Image from 'next/image';
import ReportList from '@/components/ReportList';
import Header from '@/components/Header';
import Container from '@/components/Container';
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Header title="DO DAY" type="main" />
      <Container>
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
          <styles.SearchIconBtn>
            <AiOutlineSearch />
          </styles.SearchIconBtn>
        </styles.SearchBox>
        {/** TODO: 데이터 map형태로 바꾸기 */}
        <ReportList />
        <ReportList />
        <ReportList />
        <ReportList />
        <Link href={'/report'}>
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
        </Link>
      </Container>
    </>
  );
}
