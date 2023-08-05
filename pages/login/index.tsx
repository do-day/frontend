import Button from '@/components/Button';
import * as styles from '@/pages/login/login.style';
import Input from '@/components/Input';
import Header from '@/components/Header';

export default function Login() {
  return (
    <>
      <Header title="로그인" />
      <styles.Container>
        <styles.CenterBox>
          <styles.LoginTitleBox>아이디</styles.LoginTitleBox>
          <Input />
          <styles.LoginTitleBox>비밀번호</styles.LoginTitleBox>
          <Input type="password" />
          <styles.ButtonBox>
            <Button>로그인</Button>
          </styles.ButtonBox>
        </styles.CenterBox>
        <styles.ButtonWrapper>
          <styles.AdminLoginButton>관리자 로그인</styles.AdminLoginButton>
        </styles.ButtonWrapper>
      </styles.Container>
    </>
  );
}
