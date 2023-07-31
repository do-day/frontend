import { useState } from 'react';
import ReportList from '@/components/ReportList';
import Tab from '@/components/Tab';
import Header from '@/components/Header';
import Container from '@/components/Container';

export interface TabDirection {
  border: string;
}

export default function Home() {
  const [tab, setTab] = useState<boolean>(true);
  const handleOnClick = () => {
    setTab(!tab);
  };
  const list = ['신고 목록 확인', '해결 목록 확인'];
  const link = ['/admin/report', '/admin/solve'];
  return (
    <>
      <Header title="DO DAY" type="main" />
      <Container>
        <Tab list={list} order={'0'} link={link} />
        {/** TODO: 데이터 map형태로 바꾸기 */}
        <ReportList />
      </Container>
    </>
  );
}
