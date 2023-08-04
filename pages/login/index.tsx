import Image from 'next/image';
import Button from '@/components/Button';
import * as styles from '@/pages/login/login.style';
import Input from '@/components/Input';

export default function Login() {
  return (
    <styles.Container>
      <styles.LogoWrapper>
        <Image
          src="/logo/logo-kr-new.png"
          width={1000}
          height={700}
          alt="로고"
          style={{ width: '100%', height: '100%' }}
        />
      </styles.LogoWrapper>
      <styles.CenterBox>
        <styles.LoginTitleBox>아이디</styles.LoginTitleBox>
        <Input />
        <styles.LoginTitleBox>비밀번호</styles.LoginTitleBox>
        <Input />
        <Button>로그인</Button>
      </styles.CenterBox>
      <styles.ButtonWrapper>
        <styles.AdminLoginButton>관리자 로그인</styles.AdminLoginButton>
      </styles.ButtonWrapper>
    </styles.Container>
  );
}
