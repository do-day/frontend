import { Inter } from 'next/font/google';
import * as styles from './reward.style';
import Image from 'next/image';
import SolveList from '@/components/SolveList';
import Header from '@/components/Header';
import Container from '@/components/Container';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Header title="리워드" type="main" />
      <Container>
        <styles.TopBox>
          <styles.TitleBox>적립된 리워드</styles.TitleBox>
          <styles.MiddleBox>
            <styles.MoneyBox>3750원</styles.MoneyBox>
            <styles.ChangeBox>
              <button>전환하기</button>
            </styles.ChangeBox>
          </styles.MiddleBox>
          <styles.TotalBox>총 적립 리워드 00000원</styles.TotalBox>
        </styles.TopBox>
      </Container>

      <styles.CenterBox />

      <Container>
        <styles.BottomBox>
          <styles.DescriptionBox>적립 상세 내역</styles.DescriptionBox>
          <SolveList />
          <SolveList />
          <SolveList />
          <SolveList />
          <SolveList />
        </styles.BottomBox>
      </Container>
    </>
  );
}
