import { BiCopyAlt } from 'react-icons/bi';
import Container from '@/components/Container';
import HeaderBack from '@/components/Header';
import Button from '@/components/Button';
import Textarea from '@/components/Textarea';
import * as styles from './change.style';
import { BottomBox } from '../reward.style';

export default function AdminReportDetail() {
  // TODO: props로 넘어온 값 사용
  const address = '서울특별시 동작구 노량진로 10';
  const images = ['/example1.png', '/example2.png'];
  const content =
    '대방역 3번 출구 앞 버스 정류장 쪽 빗물받이에 담배꽁초가 많아요.';

  const handleClickCopy = async () => {
    await navigator.clipboard.writeText(address);
  };

  return (
    <>
      <HeaderBack title="리워드 전환" />
      <Container>
        <styles.TopBox>내 리워드: 0,000원</styles.TopBox>
        <styles.MiddleBox>
          <styles.MoneyBox>
            <styles.MoneyInput placeholder="전활할 금액 입력"></styles.MoneyInput>
            <styles.ChangeBtn>전액 입력</styles.ChangeBtn>
          </styles.MoneyBox>
        </styles.MiddleBox>
        <BottomBox>전환하기</BottomBox>
      </Container>
    </>
  );
}
