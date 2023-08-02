import Link from 'next/link';
import { ROUTES } from '@/constants';
import ShapedImage from '@/components/ShapedImage';
import * as styles from '@/components/styles/ReportList.style';
import Tag from './Tag';
import { useEffect, useState } from 'react';

export interface RProps {
  route: string;
  reportId: number | 0;
  solutionId: number | 0;
  location: string;
  photoRaincatch: string;
  createDate: string;
  content: string;
  state: 'UNAPPROVAL' | 'UNRESOLVED' | 'RESOLVING' | 'RESOLVED' | 'REJECTED';
}

const ReportList = ({
  route,
  reportId,
  solutionId,
  location,
  photoRaincatch,
  createDate,
  content,
  state,
}: RProps) => {
  const [href, setHref] = useState<string>('');

  const formateDate = (createDate: string) => {
    const date = new Date(createDate);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${year}년 ${month}월 ${day}일 ${hours}:${minutes}`;
  };

  useEffect(() => {
    if (route === 'admin') {
      if (reportId === 0) setHref(ROUTES.ADMIN.SOLVE(solutionId));
      else setHref(ROUTES.ADMIN.REPORT(reportId));
    } else {
      if (reportId === 0) setHref(ROUTES.SOLVES.SOLVE(solutionId));
      else setHref(ROUTES.REPORTS.REPORT(reportId));
    }
  }, []);

  return (
    // TODO: 연결되는 주소를 reportId로 변경
    // TODO: admin일 경우에는 admin 라우트로 변경
    <Link href={href}>
      <styles.ListBox>
        {/** TODO: photoraincatch 사용한걸로 변경하기 */}
        <ShapedImage src={'/list.svg'} alt="썸네일" size="5rem" />
        <styles.RightBox>
          <Tag state={state} />
          <styles.ListTitle>{location}</styles.ListTitle>
          <styles.ListDate>{formateDate(createDate)}</styles.ListDate>
        </styles.RightBox>
      </styles.ListBox>
    </Link>
  );
};

export default ReportList;
