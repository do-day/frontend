import ReportList from '@/components/ReportList';
import Tab from '@/components/Tab';
import Header from '@/components/Header';
import Container from '@/components/Container';
import { ROUTES } from '@/constants';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_PREFIX } from '@/constants';
axios.defaults.baseURL = API_PREFIX;

export default function MyReportsHome() {
  const list = ['나의 신고 목록', '나의 해결 목록'];
  const link = [ROUTES.MY.REPORTS, ROUTES.MY.SOLVES];

  const getMyReport = async (memberId: string) => {
    return await axios.get(`/mypage/report/${memberId}`);
  };

  const { data } = useQuery(['memberId'], () => getMyReport('1'));
  console.log('data', data);

  return (
    <>
      <Header />
      <Container>
        <Tab list={list} link={link} />
        {data?.data.map((el: any, idx: number) => {
          return (
            <ReportList
              key={el.createDate}
              route={'my'}
              reportId={el.reportId}
              solutionId={0}
              location={el.location}
              photoRaincatch={el.photoRaincatch}
              createDate={el.createDate}
              content={el.content}
              state={el.state}
            />
          );
        })}
      </Container>
    </>
  );
}
