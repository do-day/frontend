import Container from '@/components/Container';
import Header from '@/components/Header';
import Button from '@/components/Button';
import * as styles from '@/pages/my/reward/change/change.style';
import { useQuery } from '@tanstack/react-query';
import { getTotalReward, getReward } from '@/api/reward';
import { RewardHistory } from '@/types';

export default function MyRewardChange() {
  const { data: total } = useQuery({
    queryKey: ['total', memberId],
    queryFn: () => getTotalReward(Number(memberId)),
  });

  return (
    <>
      <Header title="리워드 전환" hasBackButton />
      <Container>
        <styles.TopBox>내 리워드: {total.nowReward}원</styles.TopBox>
        <styles.TopBox>
          내 리워드: {total.nowReward.toLocaleString()}원
        </styles.TopBox>
        <styles.MoneyBox>
          <styles.MoneyInput
            placeholder="전환할 금액 입력"
            type="number"
          ></styles.MoneyInput>
        </styles.MoneyBox>
        <styles.ButtonBox>
          <styles.ChangeAllBtn>전액 입력</styles.ChangeAllBtn>
        </styles.ButtonBox>
        <Button type="submit" onClick={handleClickChange}>
      </Container>
    </>
  );
}
