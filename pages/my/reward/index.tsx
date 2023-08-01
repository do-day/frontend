import { useRouter } from 'next/router';
import RewardList from '@/components/RewardList';
import Header from '@/components/Header';
import Container from '@/components/Container';
import Button from '@/components/Button';
import * as styles from '@/pages/my/reward/reward.style';
import { ROUTES } from '@/constants';

export default function MyRewardHome() {
  const router = useRouter();

  return (
    <>
      <Header />

      <Container>
        <styles.Section>
          <styles.SectionTitle>적립된 리워드</styles.SectionTitle>
          <styles.MiddleBox>
            <styles.MoneyBox>
              <styles.Money>3750</styles.Money>원
            </styles.MoneyBox>
            <Button
              fitContent
              onClick={() => router.push(ROUTES.MY.REWARD.CHANGE)}
            >
              전환하기
            </Button>
          </styles.MiddleBox>
          <styles.TotalBox>총 적립 리워드 25300원</styles.TotalBox>
        </styles.Section>
        <styles.HorizontalLine />
        <styles.Section>
          <styles.SectionTitle>적립 상세 내역</styles.SectionTitle>
          <styles.RewardListBox>
            <RewardList />
            <RewardList />
            <RewardList />
            <RewardList />
            <RewardList />
          </styles.RewardListBox>
        </styles.Section>
      </Container>
    </>
  );
}
