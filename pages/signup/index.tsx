import Container from '@/components/Container';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Header from '@/components/Header';
import * as styles from '@/components/styles/login-signup/style';

export default function Login() {
  return (
    <>
      <Header title="회원가입" />
      <Container>
        <styles.CenterBox>
          <Input label="아이디" id="id" />
          <Input type="password" label="비밀번호" id="password" />
          <styles.ButtonBox>
            <Button>로그인</Button>
          </styles.ButtonBox>
        </styles.CenterBox>
      </Container>
    </>
  );
}
