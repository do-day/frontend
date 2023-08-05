import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import withAuth from '@/hoc/withAuth';
import { getTotalReward } from '@/api/reward';
import { changeReward } from '@/api/reward';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import * as styles from '@/pages/my/reward/change/change.style';

function MyRewardChange() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(0);
  const memberId = '1';

  const { data: total } = useQuery({
    queryKey: ['total', memberId],
    queryFn: () => getTotalReward(Number(memberId)),
  });

  const changeRewardMutation = useMutation({
    mutationFn: changeReward,
  });

  const handleClickChange = () => {
    changeRewardMutation.mutate({
      memberId: Number(memberId),
      amount: amount,
    });

    setIsOpen(true);
  };

  const AllMoneyBtn = () => {
    setAmount(total.nowReward);
  };

  return (
    <>
      <Header title="리워드 전환" hasBackButton />
      <Container>
        <styles.TopBox>
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
          전환하기
        </Button>
      </Container>
      {isOpen ? <Modal text={'전환되었습니다'} /> : ''}
    </>
  );
}

export default withAuth(MyRewardChange);
