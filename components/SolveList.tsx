import * as styles from '@/components/styles/SolveList.style';

const SolveList = () => {
  return (
    <styles.SolveList>
      <styles.DateBox>00.00</styles.DateBox>
      <styles.SolveCenterBox>
        <styles.SolveTitleBox>해결하기</styles.SolveTitleBox>
        <styles.LocationBox>동작구 세종로 126길</styles.LocationBox>
      </styles.SolveCenterBox>
      <styles.SolveMoneyBox>N원</styles.SolveMoneyBox>
    </styles.SolveList>
  );
};

export default SolveList;
