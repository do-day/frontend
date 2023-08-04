import Image from 'next/image';
import Button from '@/components/Button';
import * as styles from '@/pages/signup/signup.style';
import Input from '@/components/Input';

export default function Login() {
  return (
    <styles.Container>
      <styles.TitleBox>회원가입</styles.TitleBox>
      <styles.CenterBox>
        <styles.LoginTitleBox>휴대폰 번호(ID)</styles.LoginTitleBox>
        <Input />
        <styles.LoginTitleBox>비밀번호</styles.LoginTitleBox>
        <Input type="password" />
        <styles.ButtonBox>
          <Button>회원가입</Button>
        </styles.ButtonBox>
      </styles.CenterBox>
    </styles.Container>
  );
}
