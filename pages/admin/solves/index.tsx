import ReportList from '@/components/ReportList';
import Tab from '@/components/Tab';
import Header from '@/components/Header';
import Container from '@/components/Container';
import { ROUTES } from '@/constants';

export default function AdminSolvesHome() {
  const list = ['신고 목록 확인', '해결 목록 확인'];
  const link = [ROUTES.ADMIN.REPORTS, ROUTES.ADMIN.SOLVES];

  return (
    <>
      <Header />
      <Container>
        <Tab list={list} order={1} link={link} />
        {/** TODO: 데이터 map형태로 바꾸기 */}
        <ReportList />
      </Container>
    </>
  );
}
