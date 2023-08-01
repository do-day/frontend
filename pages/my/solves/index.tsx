import { useState } from 'react';
import ReportList from '@/components/ReportList';
import Tab from '@/components/Tab';
import Header from '@/components/Header';
import Container from '@/components/Container';
import { ROUTES } from '@/constants';

export interface TabDirection {
  border: string;
}

export default function Home() {
  const [tab, setTab] = useState<boolean>(true);
  const handleOnClick = () => {
    setTab(!tab);
  };
  const list = ['나의 신고 목록', '나의 해결 목록'];
  const link = [ROUTES.MY.REPORTS, ROUTES.MY.SOLVES];

  return (
    <>
      <Header title="DO DAY" type="main" />
      <Container>
        <Tab list={list} order={'1'} link={link} />
        {/** TODO: 데이터 map형태로 바꾸기 */}
        <ReportList />
      </Container>
    </>
  );
}
