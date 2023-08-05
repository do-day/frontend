import withAuth from '@/hoc/withAuth';
import ReportList from '@/components/ReportList';
import Tab from '@/components/Tab';
import Header from '@/components/Header';
import Container from '@/components/Container';
import { ROUTES } from '@/constants';
import { useQuery } from '@tanstack/react-query';
import { getAdminReports } from '@/api/admin';
import { Report } from '@/types';

function AdminReportsHome() {
  const list = ['신고 목록 확인', '해결 목록 확인'];
  const link = [ROUTES.ADMIN.REPORTS, ROUTES.ADMIN.SOLVES];

  const { data: reports } = useQuery({
    queryKey: ['reports', 'admin'],
    queryFn: () => getAdminReports(),
  });

  return (
    <>
      <Header />
      <Container>
        <Tab list={list} link={link} />
        {reports?.map((report: Report) => {
          return (
            <ReportList key={report.reportId} report={report} isAdmin={true} />
          );
        })}
      </Container>
    </>
  );
}

export default withAuth(AdminReportsHome, true);
