import { useQuery } from '@tanstack/react-query';
import withAuth from '@/hoc/withAuth';
import { useMember } from '@/contexts/member';
import { getMyReports } from '@/api/report';
import HeadMeta from '@/components/HeadMeta';
import ReportList from '@/components/ReportList';
import Tab from '@/components/Tab';
import Header from '@/components/Header';
import Container from '@/components/Container';
import { ROUTES } from '@/constants';
import { Report } from '@/types';

function MyReportsHome() {
  const list = ['나의 신고 목록', '나의 해결 목록'];
  const link = [ROUTES.MY.REPORTS, ROUTES.MY.SOLVES];
  const { id } = useMember();

  const { data: reports } = useQuery({
    queryKey: ['reports', String(id)],
    queryFn: () => getMyReports(id),
  });

  return (
    <>
      <HeadMeta title="나의 신고 목록" />
      <Header />
      <Container>
        <Tab list={list} link={link} />
        {reports?.map((report: Report) => {
          return (
            <ReportList key={report.reportId} report={report} isAdmin={false} />
          );
        })}
      </Container>
    </>
  );
}

export default withAuth(MyReportsHome);
