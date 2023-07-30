import Image from 'next/image';
import styled from '@emotion/styled';
import Button from '@/components/Button';

export default function Login() {
  return (
    <Container>
      <SmallLogoWrapper>
        <Image
          src="/logo/seoul-logo.png"
          width={500}
          height={200}
          alt="서울특별시 로고"
          style={{ width: '100%', height: '100%' }}
        />
      </SmallLogoWrapper>
      <LogoWrapper>
        <Image
          src="/logo/logo-kr.png"
          width={1000}
          height={700}
          alt="로고"
          style={{ width: '100%', height: '100%' }}
        />
      </LogoWrapper>
      <ButtonWrapper>
        <Button
          logoImageUrl="/logo/google-logo.svg"
          style={{
            backgroundColor: 'white',
            color: 'black',
            border: '1px solid #dddddd',
          }}
        >
          구글로 시작하기
        </Button>
        <Button
          logoImageUrl="/logo/kakao-logo.svg"
          style={{ backgroundColor: '#fee500', color: 'black' }}
        >
          카카오로 시작하기
        </Button>
        <Button
          logoImageUrl="/logo/naver-logo.svg"
          style={{ backgroundColor: '#03c75a', color: 'white' }}
        >
          네이버로 시작하기
        </Button>
        <AdminLoginButton>관리자 로그인</AdminLoginButton>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  height: 100vh;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
`;

const LogoWrapper = styled.div`
  max-width: 30rem;
  margin: 0 auto;
  padding: 1rem 4rem;
`;

const SmallLogoWrapper = styled.div`
  max-width: 7.5rem;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const AdminLoginButton = styled.button`
  color: var(--color-gray);
  background-color: transparent;
  text-decoration: underline;
  margin-top: 1rem;
`;
