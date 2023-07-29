import { Inter } from 'next/font/google';
import * as styles from './reward.style';
import Image from 'next/image';
import SaveList from '@/components/SaveList';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
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
          <styles.LogoBox>리워드</styles.LogoBox>
        </styles.Header>
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
      </styles.Container>
      <styles.CenterBox />

      <styles.Container>
        <styles.BottomBox>
          <styles.DescriptionBox>적립 상세 내역</styles.DescriptionBox>
          {/** TODO: components로 빼기 */}
          <styles.SaveList>
            <styles.DateBox>00.00</styles.DateBox>
            <styles.SaveCenterBox>
              <styles.SaveTitleBox>해결하기</styles.SaveTitleBox>
              <styles.LocationBox>동작구 세종로 126길</styles.LocationBox>
            </styles.SaveCenterBox>
            <styles.SaveMoneyBox>N원</styles.SaveMoneyBox>
          </styles.SaveList>
        </styles.BottomBox>
      </styles.Container>
    </>
  );
}
