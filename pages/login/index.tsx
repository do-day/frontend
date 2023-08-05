import Link from 'next/link';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Header from '@/components/Header';
import { ROUTES } from '@/constants';
import Container from '@/components/Container';
import * as styles from '@/components/styles/login-signup/style';

export default function Login() {
  return (
    <>
      <Header title="로그인" />
      <Container>
        <styles.Wrapper>
          <styles.CenterBox>
            <Input label="아이디" id="id" />
            <Input type="password" label="비밀번호" id="password" />
            <styles.ButtonBox>
              <Button>로그인</Button>
              <styles.SignupBox>
                <Link href={ROUTES.SIGNUP}>회원가입</Link>
              </styles.SignupBox>
            </styles.ButtonBox>
          </styles.CenterBox>
          <styles.AdminLoginBox>
            <styles.AdminLoginButton>관리자 로그인</styles.AdminLoginButton>
          </styles.AdminLoginBox>
        </styles.Wrapper>
      </Container>
    </>
  );
}
