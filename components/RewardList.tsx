import * as styles from '@/components/styles/RewardList.style';
import { RewardHistory } from '@/types';
import { onlyDate } from '@/utils';

const RewardList = ({
  date,
  location,
  price,
  rewardId,
  type,
}: RewardHistory) => {
  const rewardDate = onlyDate(date);

  return (
    <styles.RewardList>
      <styles.DateBox>{rewardDate}</styles.DateBox>
      <styles.RewardCenterBox>
        <styles.RewardTitleBox>{type}</styles.RewardTitleBox>
        <styles.LocationBox>{location}</styles.LocationBox>
      </styles.RewardCenterBox>
      <styles.RewardMoneyBox>
        <styles.Money>{price}</styles.Money>원
      </styles.RewardMoneyBox>
    </styles.RewardList>
  );
};

export default RewardList;
