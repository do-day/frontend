import withAuth from '@/hoc/withAuth';
import Tab from '@/components/Tab';
import HeadMeta from '@/components/HeadMeta';
import Header from '@/components/Header';
import Container from '@/components/Container';
import { ROUTES } from '@/constants';
import { useQuery } from '@tanstack/react-query';
import { getAdminSolves } from '@/api/admin';
import { Solve } from '@/types';
import SolveList from '@/components/SolveList';

function AdminSolvesHome() {
  const list = ['신고 목록 확인', '해결 목록 확인'];
  const link = [ROUTES.ADMIN.REPORTS, ROUTES.ADMIN.SOLVES];

  const { data: solves } = useQuery({
    queryKey: ['solves', 'admin'],
    queryFn: () => getAdminSolves(),
  });

  return (
    <>
      <HeadMeta title="해결 목록 확인" />
      <Header />
      <Container>
        <Tab list={list} order={1} link={link} />
        {solves?.map((solve: Solve) => {
          return (
            <SolveList key={solve.solutionId} solve={solve} isAdmin={true} />
          );
        })}
      </Container>
    </>
  );
}

export default withAuth(AdminSolvesHome, true);
