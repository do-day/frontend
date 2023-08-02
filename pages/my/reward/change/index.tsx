import Container from '@/components/Container';
import Header from '@/components/Header';
import Button from '@/components/Button';
import * as styles from '@/pages/my/reward/change/change.style';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTotalReward, getReward } from '@/api/reward';
import { RewardHistory } from '@/types';

export default function MyRewardChange() {
  const [amount, setAmount] = useState<number>(0);
  const memberId = '1';

  const { data: total } = useQuery({
    queryKey: ['total', memberId],
    queryFn: () => getTotalReward(Number(memberId)),
  });

  const AllMoneyBtn = () => {
    setAmount(total.nowReward);
  };

  return (
    <>
      <Header title="리워드 전환" hasBackButton />
      <Container>
        <styles.TopBox>내 리워드: {total.nowReward}원</styles.TopBox>
        <styles.TopBox>
          내 리워드: {total.nowReward.toLocaleString()}원
          내 리워드: {total?.nowReward.toLocaleString()}원
        </styles.TopBox>
        <styles.MoneyBox>
          <styles.MoneyInput
            value={amount !== 0 ? amount : ''}
            placeholder="전환할 금액 입력"
            type="number"
            onChange={(e) => setAmount(Number(e.target.value))}
          ></styles.MoneyInput>
        </styles.MoneyBox>
        <styles.ButtonBox>
          <styles.ChangeAllBtn onClick={AllMoneyBtn}>
            전액 입력
          </styles.ChangeAllBtn>
        </styles.ButtonBox>
        <Button type="submit" onClick={handleClickChange}>
      </Container>
    </>
  );
}
