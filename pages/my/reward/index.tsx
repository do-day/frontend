import RewardList from '@/components/RewardList';
import Header from '@/components/Header';
import Container from '@/components/Container';
import * as styles from '@/pages/my/reward/reward.style';

export default function MyRewardHome() {
  return (
    <>
      <Header />
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
          <RewardList />
          <RewardList />
          <RewardList />
          <RewardList />
          <RewardList />
        </styles.BottomBox>
      </Container>
    </>
  );
}
