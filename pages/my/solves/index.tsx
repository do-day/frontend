import { useQuery } from '@tanstack/react-query';
import { getMySolves } from '@/api/solve';
import SolveList from '@/components/SolveList';
import Tab from '@/components/Tab';
import Header from '@/components/Header';
import Container from '@/components/Container';
import { ROUTES } from '@/constants';
import { Solve } from '@/types';
import withAuth from '@/hoc/withAuth';

function MySolvesHome() {
  const list = ['나의 신고 목록', '나의 해결 목록'];
  const link = [ROUTES.MY.REPORTS, ROUTES.MY.SOLVES];

  // TODO: 로그인 정보에서 memberId 가져오기
  const memberId = '1';

  const { data: solves } = useQuery({
    queryKey: ['solves', memberId],
    queryFn: () => getMySolves(Number(memberId)),
  });

  return (
    <>
      <Header />
      <Container>
        <Tab list={list} order={1} link={link} />
        {solves?.map((solve: Solve) => (
          <SolveList key={solve.solutionId} solve={solve} />
        ))}
      </Container>
    </>
  );
}

export default withAuth(MySolvesHome);
