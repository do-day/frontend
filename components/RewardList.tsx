import * as styles from '@/components/styles/RewardList.style';
import { Reward } from '@/types';
import { formatonlyDate } from '@/utils';

const RewardList = ({ date, location, price, rewardId, type }: Reward) => {
  const rewardDate = formatonlyDate(date);

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
