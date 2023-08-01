import * as styles from '@/components/styles/RewardList.style';

const RewardList = () => {
  return (
    <styles.RewardList>
      <styles.DateBox>00.00</styles.DateBox>
      <styles.RewardCenterBox>
        <styles.RewardTitleBox>해결하기</styles.RewardTitleBox>
        <styles.LocationBox>동작구 세종로 126길</styles.LocationBox>
      </styles.RewardCenterBox>
      <styles.RewardMoneyBox>N원</styles.RewardMoneyBox>
    </styles.RewardList>
  );
};

export default RewardList;
