import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { BiPencil } from 'react-icons/bi';
import { getReports } from '@/api/report';
import HeadMeta from '@/components/HeadMeta';
import Header from '@/components/Header';
import Container from '@/components/Container';
import ReportList from '@/components/ReportList';
import { ROUTES } from '@/constants';
import * as styles from '@/components/styles/pages/main.style';

export default function Home() {
  const { data: reports } = useQuery({
    queryKey: ['reports', 'main'],
    queryFn: getReports,
  });

  return (
    <>
      <HeadMeta title="메인" />
      <Header />

      <Container>
        <styles.TopTitle>신고목록</styles.TopTitle>
        <styles.TopDescription>
          해결하고 싶은 신고를 선택해 주세요.
        </styles.TopDescription>

        {reports?.map((report) => (
          <ReportList report={report} key={report.reportId} />
        ))}
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
