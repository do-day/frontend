import Image from 'next/image';
import * as styles from '@/components/styles/ReportList.style';

const ReportList = () => {
  return (
    <styles.ListBox>
      <styles.PicBox>
        <Image src="/list.svg" alt="goback" width={68} height={68} priority />
      </styles.PicBox>
      <styles.RightBox>
        <styles.ListTagBox>
          <styles.Tag>미해결</styles.Tag>
        </styles.ListTagBox>
        <styles.ListTopBox>서울특별시 동작구 노량진로 10</styles.ListTopBox>
        <styles.ListDateBox>최초 신고일 23.07.01 18:30</styles.ListDateBox>
      </styles.RightBox>
    </styles.ListBox>
  );
};

export default ReportList;
