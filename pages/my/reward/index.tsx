import { useRouter } from 'next/router';
import RewardList from '@/components/RewardList';
import Header from '@/components/Header';
import Container from '@/components/Container';
import Button from '@/components/Button';
import * as styles from '@/pages/my/reward/reward.style';
import { ROUTES } from '@/constants';
import { useQuery } from '@tanstack/react-query';
import { getTotalReward, getReward } from '@/api/reward';
import { Reward } from '@/types';
import withAuth from '@/hoc/withAuth';

function MyRewardHome() {
  const router = useRouter();

  // TODO: memberId를 로그인 정보에서 가져오기
  const memberId = '1';

  const { data: rewards } = useQuery({
    queryKey: ['reward', memberId],
    queryFn: () => getReward(Number(memberId)),
  });

  const { data: total } = useQuery({
    queryKey: ['total', memberId],
    queryFn: () => getTotalReward(Number(memberId)),
  });

  return (
    <>
      <Header />
      <Container>
        <styles.Section>
          <styles.SectionTitle>적립된 리워드</styles.SectionTitle>
          <styles.MiddleBox>
            <styles.MoneyBox>
              <styles.Money>{total?.nowReward.toLocaleString()}</styles.Money>원
            </styles.MoneyBox>
            <Button
              fitContent
              onClick={() => router.push(ROUTES.MY.REWARD.CHANGE)}
            >
              전환하기
            </Button>
          </styles.MiddleBox>
          <styles.TotalBox>
            총 적립 리워드 {total?.totalReward.toLocaleString()}원
          </styles.TotalBox>
        </styles.Section>
        <styles.HorizontalLine />
        <styles.Section>
          <styles.SectionTitle>적립 상세 내역</styles.SectionTitle>
          <styles.RewardListBox>
            {rewards?.map((reward: Reward) => {
              return (
                <RewardList
                  key={reward.date}
                  date={reward.date}
                  location={reward.location}
                  price={reward.price}
                  rewardId={reward.rewardId}
                  type={reward.type}
                />
              );
            })}
          </styles.RewardListBox>
        </styles.Section>
      </Container>
    </>
  );
}

export default withAuth(MyRewardHome);
