import ListItem from '@/components/ListItem';
import { formatDate } from '@/utils';
import { ROUTES } from '@/constants';
import { Report } from '@/types';

interface Props {
  report: Report;
  isAdmin?: boolean;
}

const ReportList = ({ report, isAdmin = false }: Props) => {
  // TODO: 로그인 정보 확인해서 admin 라우팅하기
  const href = isAdmin
    ? ROUTES.ADMIN.REPORT(report.reportId)
    : ROUTES.REPORTS.REPORT(report.reportId);
  const formattedDate = formatDate(report.createDate);

  return (
    <ListItem
      href={href}
      thumbnail={report.photoRaincatch}
      state={report.state}
      title={report.location}
      date={formattedDate}
    />
  );
};

export default ReportList;
