import ListItem from '@/components/ListItem';
import { ROUTES } from '@/constants';
import { Solve } from '@/types';

interface Props {
  solve: Solve;
  isAdmin?: boolean;
}

const SolveList = ({ solve, isAdmin = false }: Props) => {
  // TODO: 로그인 정보 확인해서 admin 라우팅하기
  const href = isAdmin
    ? ROUTES.ADMIN.SOLVE(solve.solutionId)
    : ROUTES.SOLVES.SOLVE(solve.solutionId);

  return (
    <ListItem
      href={href}
      thumbnail={solve.photo}
      state={solve.state}
      title={solve.location}
      date={solve.createdDate}
    />
  );
};

export default SolveList;
