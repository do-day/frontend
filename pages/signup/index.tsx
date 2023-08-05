import Image from 'next/image';
import Button from '@/components/Button';
import * as styles from '@/pages/signup/signup.style';
import Input from '@/components/Input';
import Header from '@/components/Header';

export default function Login() {
  return (
    <>
      <Header title="회원가입" />
      <styles.Container>
        <styles.CenterBox>
          <styles.LoginTitleBox>아이디</styles.LoginTitleBox>
          <Input />
          <styles.LoginTitleBox>비밀번호</styles.LoginTitleBox>
          <Input type="password" />
          <styles.ButtonBox>
            <Button>회원가입</Button>
          </styles.ButtonBox>
        </styles.CenterBox>
      </styles.Container>
    </>
  );
}
