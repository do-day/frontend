import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import withAuth from '@/hoc/withAuth';
import { getTotalReward, getReward } from '@/api/reward';
import { useMember } from '@/contexts/member';
import RewardList from '@/components/RewardList';
import HeadMeta from '@/components/HeadMeta';
import Header from '@/components/Header';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { ROUTES } from '@/constants';
import { Reward } from '@/types';
import * as styles from '@/components/styles/pages/reward.style';

function MyRewardHome() {
  const router = useRouter();
  const { id } = useMember();

  const { data: rewards } = useQuery({
    queryKey: ['reward', String(id)],
    queryFn: () => getReward(id),
  });

  const { data: total } = useQuery({
    queryKey: ['total', String(id)],
    queryFn: () => getTotalReward(Number(id)),
  });

  return (
    <>
      <HeadMeta title="나의 리워드" />
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
