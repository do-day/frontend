import Link from 'next/link';
import { ROUTES } from '@/constants';
import ShapedImage from '@/components/ShapedImage';
import * as styles from '@/components/styles/ReportList.style';

const ReportList = () => {
  return (
    // TODO: 연결되는 주소를 reportId로 변경
    // TODO: admin일 경우에는 admin 라우트로 변경
    <Link href={ROUTES.REPORTS.REPORT(1)}>
      <styles.ListBox>
        <ShapedImage src="/list.svg" alt="썸네일" size="5rem" />
        <styles.RightBox>
          <styles.ListTagBox>
            <styles.Tag>미해결</styles.Tag>
          </styles.ListTagBox>
          <styles.ListTitle>서울특별시 동작구 노량진로 10</styles.ListTitle>
          <styles.ListDate>2023년 7월 1일 18:30</styles.ListDate>
        </styles.RightBox>
      </styles.ListBox>
    </Link>
  );
};

export default ReportList;
