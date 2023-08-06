import ListItem from '@/components/ListItem';
import { ROUTES } from '@/constants';
import { Report } from '@/types';

interface Props {
  report: Report;
  isAdmin?: boolean;
}

const ReportList = ({ report, isAdmin = false }: Props) => {
  const href = isAdmin
    ? ROUTES.ADMIN.REPORT(report.reportId)
    : ROUTES.REPORTS.REPORT(report.reportId);

  return (
    <ListItem
      href={href}
      thumbnail={report.photoRaincatch}
      state={report.state}
      title={report.location}
      date={report.createdDate}
    />
  );
};

export default ReportList;
