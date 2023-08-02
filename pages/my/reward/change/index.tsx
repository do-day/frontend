import Container from '@/components/Container';
import Header from '@/components/Header';
import Button from '@/components/Button';
import * as styles from '@/pages/my/reward/change/change.style';

export default function MyRewardChange() {
  return (
    <>
      <Header title="리워드 전환" hasBackButton />
      <Container>
        <styles.TopBox>내 리워드: 0,000원</styles.TopBox>
        <styles.MoneyBox>
          <styles.MoneyInput
            placeholder="전환할 금액 입력"
            type="number"
          ></styles.MoneyInput>
        </styles.MoneyBox>
        <styles.ButtonBox>
          <styles.ChangeAllBtn>전액 입력</styles.ChangeAllBtn>
        </styles.ButtonBox>
        <Button type="submit">전환하기</Button>
      </Container>
    </>
  );
}
