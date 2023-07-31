import styled from '@emotion/styled';
import Link from 'next/link';

interface NProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Nav = ({ isOpen, setIsOpen }: NProps) => {
  const hanldeonClickbtn = () => {
    setIsOpen(false);
  };

  return (
    <Backdrop onClick={hanldeonClickbtn}>
      <FlexBox onClick={(e) => e.stopPropagation()}>
        <Link href={'/'}>
          <MainBox>메인으로 가기</MainBox>
        </Link>
        <MainBox>
          마이페이지
          <SubMenuBox>
            <Link href={'/my/report'}>
              <SubMenuNameBox>나의 신고 목록</SubMenuNameBox>
            </Link>
            <Link href={'/my/solve'}>
              <SubMenuNameBox>나의 해결 목록</SubMenuNameBox>
            </Link>
            <Link href={'/my/reward'}>
              <SubMenuNameBox>리워드</SubMenuNameBox>
            </Link>
          </SubMenuBox>
        </MainBox>
        <LogOutBox>로그아웃</LogOutBox>
      </FlexBox>
    </Backdrop>
  );
};

const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const FlexBox = styled.div`
  background-color: white;
  position: absolute;
  z-index: 11;
  height: 100%;
  width: 15rem;
  left: 0%;
  &.fail {
    height: 100%;
  }
`;

const MainBox = styled.div`
  font-size: 18px;
  font-weight: 700;
  padding: 20px;
  margin-top: 5px;
`;

const SubMenuBox = styled.div`
  font-weight: 400;
  margin-top: 30px;
  margin-left: 20px;
`;

const SubMenuNameBox = styled.div`
  margin-left: 15px;
  margin-top: 35px;
`;

const LogOutBox = styled.div`
  position: fixed;
  left: 10rem;
  bottom: 1rem;
  color: #0083cd;
  text-decoration: underline;
  font-size: 16px;
`;

export default Nav;
