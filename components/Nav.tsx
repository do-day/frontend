import { createPortal } from 'react-dom';
import Link from 'next/link';
import Backdrop from '@/components/Backdrop';
import { ROUTES } from '@/constants';
import * as styles from '@/components/styles/Nav.style';

interface NProps {
  setIsOpen: (isOpen: boolean) => void;
}

const Nav = ({ setIsOpen }: NProps) => {
  const handleOnClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {createPortal(
        <Backdrop onClick={handleOnClose} />,
        document.getElementById('modal-root') as HTMLElement,
      )}
      {createPortal(
        <styles.Nav>
          <Link href={ROUTES.MAIN}>
            <styles.MainBox>메인</styles.MainBox>
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
          {process.env.NODE_ENV === 'development' && (
            <styles.MainBox>
              개발 모드
              <styles.SubMenuBox>
                <Link href={ROUTES.ADMIN.REPORTS}>
                  <styles.SubMenuNameBox>
                    관리자 신고 목록
                  </styles.SubMenuNameBox>
                </Link>
                <Link href={ROUTES.ADMIN.SOLVES}>
                  <styles.SubMenuNameBox>
                    관리자 해결 목록
                  </styles.SubMenuNameBox>
                </Link>
                <Link href={ROUTES.LOGIN}>
                  <styles.SubMenuNameBox>로그인 페이지</styles.SubMenuNameBox>
                </Link>
              </styles.SubMenuBox>
            </styles.MainBox>
          )}
          <styles.LogOutButton>로그아웃</styles.LogOutButton>
        </styles.Nav>,
        document.getElementById('modal-root') as HTMLElement,
      )}
    </>
  );
};

export default Nav;
