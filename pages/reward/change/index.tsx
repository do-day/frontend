import Container from '@/components/Container';
import HeaderBack from '@/components/Header';
import Button from '@/components/Button';
import * as styles from './change.style';

export default function RewardChange() {
  return (
    <>
      <HeaderBack title="리워드 전환" />
      <Container>
        <styles.TopBox>내 리워드: 0,000원</styles.TopBox>
        <styles.MiddleBox>
          <styles.MoneyBox>
            <styles.MoneyInput placeholder="전환할 금액 입력"></styles.MoneyInput>
          </styles.MoneyBox>
          <styles.ButtonBox>
            <styles.ChangeAllBtn>전액 입력</styles.ChangeAllBtn>
          </styles.ButtonBox>
        </styles.MiddleBox>
        <styles.BottomBox>
          <Button type="submit">전환하기</Button>
        </styles.BottomBox>
      </Container>
    </>
  );
}
