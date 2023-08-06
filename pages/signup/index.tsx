import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { useMember } from '@/contexts/member';
import { signup } from '@/api/member';
import HeadMeta from '@/components/HeadMeta';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Header from '@/components/Header';
import { validateInput } from '@/utils';
import { ROUTES } from '@/constants';
import * as styles from '@/components/styles/login-signup/style';

export default function Signup() {
  const [signupForm, setSignupForm] = useState({
    userId: '',
    password: '',
    passwordCheck: '',
  });
  const [message, setMessage] = useState('');
  const router = useRouter();
  const userIdRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCheckRef = useRef<HTMLInputElement>(null);
  const { saveId } = useMember();

  useEffect(() => {
    if (signupForm.password !== signupForm.passwordCheck) {
      setMessage('비밀번호가 일치하지 않습니다.');
    } else {
      setMessage('');
    }
  }, [signupForm.password, signupForm.passwordCheck]);

  const signupMutation = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      if (data.code === 400) {
        setMessage('이미 존재하는 아이디입니다.');
        userIdRef.current?.focus();
      } else {
        saveId(data.result.id);
        router.replace(ROUTES.WELCOME);
      }
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!signupForm.userId) {
      setMessage('아이디를 입력해 주세요.');
      userIdRef.current?.focus();
      return;
    }
    if (!signupForm.password) {
      setMessage('비밀번호를 입력해 주세요.');
      passwordRef.current?.focus();
      return;
    }
    if (!signupForm.passwordCheck) {
      setMessage('비밀번호 확인을 입력해 주세요.');
      passwordCheckRef.current?.focus();
      return;
    }

    if (!validateInput(signupForm.userId)) {
      setMessage('아이디는 4자 이상 10자 이하의 영문, 숫자 조합입니다.');
      userIdRef.current?.focus();
      return;
    }
    if (!validateInput(signupForm.password)) {
      setMessage('비밀번호는 4자 이상 10자 이하의 영문, 숫자 조합입니다.');
      passwordRef.current?.focus();
      return;
    }

    signupMutation.mutate({
      userId: signupForm.userId,
      password: signupForm.password,
    });
  };

  return (
    <>
      <HeadMeta title="회원가입" />
      <Header title="회원가입" />
      <Container>
        <styles.Form onSubmit={handleSubmit}>
          <styles.CenterBox>
            <styles.InputBox>
              <Input
                label="아이디"
                id="userId"
                value={signupForm.userId}
                placeholder={'4자 이상 10자 이하의 영문, 숫자 조합'}
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
                placeholder={'4자 이상 10자 이하의 영문, 숫자 조합'}
                onChange={(e) =>
                  setSignupForm({ ...signupForm, password: e.target.value })
                }
                ref={passwordRef}
              />
              <Input
                type="password"
                label="비밀번호 확인"
                id="passwordCheck"
                value={signupForm.passwordCheck}
                onChange={(e) =>
                  setSignupForm({
                    ...signupForm,
                    passwordCheck: e.target.value,
                  })
                }
                ref={passwordCheckRef}
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
