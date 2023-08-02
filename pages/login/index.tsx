import Image from 'next/image';
import Button from '@/components/Button';
import * as styles from '@/pages/login/login.style';

export default function Login() {
  return (
    <styles.Container>
      <styles.SmallLogoWrapper>
        <Image
          src="/logo/seoul-logo.png"
          width={500}
          height={200}
          alt="서울특별시 로고"
          style={{ width: '100%', height: '100%' }}
        />
      </styles.SmallLogoWrapper>
      <styles.LogoWrapper>
        <Image
          src="/logo/logo-kr.png"
          width={1000}
          height={700}
          alt="로고"
          style={{ width: '100%', height: '100%' }}
        />
      </styles.LogoWrapper>
      <styles.ButtonWrapper>
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
        <styles.AdminLoginButton>관리자 로그인</styles.AdminLoginButton>
      </styles.ButtonWrapper>
    </styles.Container>
  );
}
