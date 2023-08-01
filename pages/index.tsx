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
        <styles.TopTitle>신고목록</styles.TopTitle>
        <styles.TopDescription>
          해결하고 싶은 신고를 선택해 주세요.
        </styles.TopDescription>

        <styles.SearchBox>
          <styles.SearchInput placeholder="검색"></styles.SearchInput>
          <styles.SearchIconBtn type="submit">
            <BiSearch />
          </styles.SearchIconBtn>
        </styles.SearchBox>

        {/** TODO: 데이터 map형태로 바꾸기 */}
        <ReportList />
        <ReportList />
        <ReportList />
        <ReportList />
      </Container>

      <Link href={ROUTES.REPORTS.NEW}>
        <styles.WriteButtonBox>
          <styles.WriteButton>
            <styles.WriteIcon>
              <BiPencil />
            </styles.WriteIcon>
            <styles.WriteTxt>신고하기</styles.WriteTxt>
          </styles.WriteButton>
        </styles.WriteButtonBox>
      </Link>
    </>
  );
}
