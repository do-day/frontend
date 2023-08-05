import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { signup } from '@/api/member';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Header from '@/components/Header';
import { ROUTES } from '@/constants';
import * as styles from '@/components/styles/login-signup/style';

export default function Signup() {
  const [signupForm, setSignupForm] = useState({
    userId: '',
    password: '',
    passwordCheck: '',
  });
  const userIdRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState('');
  const router = useRouter();

  const signupMutation = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      if (data.code === 400) {
        setMessage('이미 존재하는 아이디입니다.');
        userIdRef.current?.focus();
      } else {
        router.replace(ROUTES.WELCOME);
        // TODO: 로컬스토리지에 회원 정보 저장
      }
    },
  });

  useEffect(() => {
    if (signupForm.password !== signupForm.passwordCheck) {
      setMessage('비밀번호가 일치하지 않습니다.');
    } else {
      setMessage('');
    }
  }, [signupForm.password, signupForm.passwordCheck]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!signupForm.userId) {
      setMessage('아이디를 입력해주세요.');
      return;
    }
    if (!signupForm.password) {
      setMessage('비밀번호를 입력해주세요.');
      return;
    }
    if (!signupForm.passwordCheck) {
      setMessage('비밀번호 확인을 입력해주세요.');
      return;
    }
    signupMutation.mutate({
      userId: signupForm.userId,
      password: signupForm.password,
    });
  };

  return (
    <>
      <Header title="회원가입" />
      <Container>
        <styles.Form onSubmit={handleSubmit}>
          <styles.CenterBox>
            <styles.InputBox>
              <Input
                label="아이디"
                id="userId"
                value={signupForm.userId}
                onChange={(e) =>
                  setSignupForm({ ...signupForm, userId: e.target.value })
                }
                ref={userIdRef}
              />
              <Input
                type="password"
                label="비밀번호"
                id="password"
                value={signupForm.password}
                onChange={(e) =>
                  setSignupForm({ ...signupForm, password: e.target.value })
                }
              />
              <Input
                type="password"
                label="비밀번호 확인"
                id="password"
                value={signupForm.passwordCheck}
                onChange={(e) =>
                  setSignupForm({
                    ...signupForm,
                    passwordCheck: e.target.value,
                  })
                }
              />
              <styles.Message>{message}</styles.Message>
            </styles.InputBox>
            <styles.ButtonBox>
              <Button type="submit">회원가입</Button>
            </styles.ButtonBox>
          </styles.CenterBox>
        </styles.Form>
      </Container>
    </>
  );
}
