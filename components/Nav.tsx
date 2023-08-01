import Link from 'next/link';
import { ROUTES } from '@/constants';
import * as styles from '@/components/styles/Nav.style';

interface NProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Nav = ({ isOpen, setIsOpen }: NProps) => {
  const hanldeonClickbtn = () => {
    setIsOpen(false);
  };

  return (
    <styles.Backdrop onClick={hanldeonClickbtn}>
      <styles.FlexBox onClick={(e) => e.stopPropagation()}>
        <Link href={ROUTES.MAIN}>
          <styles.MainBox>메인으로 가기</styles.MainBox>
        </Link>
        <styles.MainBox>
          마이페이지
          <styles.SubMenuBox>
            <Link href={ROUTES.MY.REPORTS}>
              <styles.SubMenuNameBox>나의 신고 목록</styles.SubMenuNameBox>
            </Link>
            <Link href={ROUTES.MY.SOLVES}>
              <styles.SubMenuNameBox>나의 해결 목록</styles.SubMenuNameBox>
            </Link>
            <Link href={ROUTES.MY.REWARD.INDEX}>
              <styles.SubMenuNameBox>리워드</styles.SubMenuNameBox>
            </Link>
          </styles.SubMenuBox>
        </styles.MainBox>
        <styles.LogOutBox>로그아웃</styles.LogOutBox>
      </styles.FlexBox>
    </styles.Backdrop>
  );
};

export default Nav;
