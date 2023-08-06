import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useMutation } from '@tanstack/react-query';
import { useMember } from '@/contexts/member';
import { login } from '@/api/member';
import HeadMeta from '@/components/HeadMeta';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Header from '@/components/Header';
import { ROUTES } from '@/constants';
import * as styles from '@/components/styles/login-signup/style';

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    userId: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const router = useRouter();
  const redirect = router.query.redirect as string;
  const userIdRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { id, saveId } = useMember();

  useEffect(() => {
    if (!id) return;
    router.push(ROUTES.MAIN);
  }, [id, router]);

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data.code === 404) {
        setMessage('아이디 또는 비밀번호가 일치하지 않습니다.');
        return;
      }
      saveId(data.result.id);
      router.replace(redirect ? redirect : ROUTES.MAIN);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!loginForm.userId) {
      setMessage('아이디를 입력해 주세요.');
      userIdRef.current?.focus();
      return;
    }
    if (!loginForm.password) {
      setMessage('비밀번호를 입력해 주세요.');
      passwordRef.current?.focus();
      return;
    }

    loginMutation.mutate(loginForm);
  };

  const handleClickAdminLogin = () => {
    saveId(Number(process.env.NEXT_PUBLIC_ADMIN_ID));
    router.replace(ROUTES.ADMIN.REPORTS);
  };

  if (id > 0) return null;

  return (
    <>
      <HeadMeta title="로그인" />
      <Header title="로그인" />
      <Container>
        <styles.Form onSubmit={handleSubmit}>
          <styles.CenterBox>
            <styles.InputBox>
              <Input
                label="아이디"
                id="userId"
                value={loginForm.userId}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, userId: e.target.value })
                }
                ref={userIdRef}
              />
              <Input
                type="password"
                label="비밀번호"
                id="password"
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, password: e.target.value })
                }
                ref={passwordRef}
              />
              <styles.Message>{message}</styles.Message>
            </styles.InputBox>
            <styles.ButtonBox>
              <Button type="submit">로그인</Button>
              <styles.SignupBox>
                <Link href={ROUTES.SIGNUP}>회원가입</Link>
              </styles.SignupBox>
            </styles.ButtonBox>
          </styles.CenterBox>
          <styles.AdminLoginBox>
            <styles.AdminLoginButton onClick={handleClickAdminLogin}>
              관리자 로그인
            </styles.AdminLoginButton>
          </styles.AdminLoginBox>
        </styles.Form>
      </Container>
    </>
  );
}
