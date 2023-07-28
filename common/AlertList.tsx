import * as styles from './style/AlertList.style';
import Image from 'next/image';

const AlertList = () => {
  return (
    <styles.ListBox>
      <styles.PicBox>
        <Image src="/list.svg" alt="goback" width={70} height={70} priority />
      </styles.PicBox>
      <styles.RightBox>
        <styles.ListTopBox>서울특별시 동작구 노량진로 10</styles.ListTopBox>
        <styles.ListBottomBox>
          <styles.ListDateBox>최초 신고일: 2023.07.01 18:30</styles.ListDateBox>
          <styles.ListTagBox>
            <styles.Tag>미해결</styles.Tag>
          </styles.ListTagBox>
        </styles.ListBottomBox>
      </styles.RightBox>
    </styles.ListBox>
  );
};

export default AlertList;
