import Link from 'next/link';
import { BiSearch, BiPencil } from 'react-icons/bi';
import ReportList from '@/components/ReportList';
import Header from '@/components/Header';
import Container from '@/components/Container';
import { ROUTES } from '@/constants';
import * as styles from '@/pages/main.style';

export default function Home() {
  return (
    <>
      <Header />
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
            <BiSearch />
          </styles.SearchIconBtn>
        </styles.SearchBox>
        {/** TODO: 데이터 map형태로 바꾸기 */}
        <ReportList />
        <ReportList />
        <ReportList />
        <ReportList />
        <Link href={ROUTES.REPORTS.NEW}>
          <styles.WriteButton>
            <styles.WriteIcon>
              <BiPencil />
            </styles.WriteIcon>
            <styles.WriteTxt>신고하기</styles.WriteTxt>
          </styles.WriteButton>
        </Link>
      </Container>
    </>
  );
}
