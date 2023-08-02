import { useQuery } from '@tanstack/react-query';
import { getMyReports } from '@/api/report';
import ReportList from '@/components/ReportList';
import Tab from '@/components/Tab';
import Header from '@/components/Header';
import Container from '@/components/Container';
import { ROUTES } from '@/constants';
import { Report } from '@/types';

export default function MyReportsHome() {
  const list = ['나의 신고 목록', '나의 해결 목록'];
  const link = [ROUTES.MY.REPORTS, ROUTES.MY.SOLVES];

  // TODO: memberId를 로그인 정보에서 가져오기
  const memberId = '1';

  const { data: reports } = useQuery({
    queryKey: ['reports', memberId],
    queryFn: () => getMyReports(Number(memberId)),
  });

  return (
    <>
      <Header />
      <Container>
        <Tab list={list} link={link} />
        {reports?.map((report: Report) => {
          return <ReportList key={report.reportId} report={report} />;
        })}
      </Container>
    </>
  );
}
