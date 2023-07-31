import * as styles from '../../my/report/report.style';
import Image from 'next/image';
import { useState } from 'react';
import ReportList from '@/components/ReportList';
import Tab from '@/components/Tab';

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
    <styles.Container>
      <styles.Header>
        <styles.MenuBox>
          <Image
            src="/Header/menu.svg"
            alt="goback"
            width={25}
            height={25}
            priority
          />
        </styles.MenuBox>
        <styles.LogoBox>DO DAY</styles.LogoBox>
      </styles.Header>
      <Tab list={list} order={'0'} link={link} />
      {/** TODO: 데이터 map형태로 바꾸기 */}
      <ReportList />
    </styles.Container>
  );
}