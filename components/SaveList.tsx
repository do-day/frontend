import * as styles from './styles/SaveList.style';

const SaveList = () => {
  return (
    <styles.SaveList>
      <styles.DateBox>00.00</styles.DateBox>
      <styles.SaveCenterBox>
        <styles.SaveTitleBox>해결하기</styles.SaveTitleBox>
        <styles.LocationBox>동작구 세종로 126길</styles.LocationBox>
      </styles.SaveCenterBox>
      <styles.SaveMoneyBox>N원</styles.SaveMoneyBox>
    </styles.SaveList>
  );
};

export default SaveList;
