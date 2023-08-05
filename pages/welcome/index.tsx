import { useRouter } from 'next/router';
import Image from 'next/image';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { ROUTES } from '@/constants';
import * as styles from '@/pages/welcome/welcome.style';

export default function Welcome() {
  const router = useRouter();

  const handleClickBtn = () => {
    router.push(ROUTES.MAIN);
  };

  return (
    <Container>
      <styles.LogoWrapper>
        <Image
          src="/logo/seoul-logo.png"
          alt="서울특별시"
          width={330}
          height={96}
          style={{ width: '100%', height: 'auto' }}
        />
      </styles.LogoWrapper>
      <styles.ImageWrapper>
        <Image
          src="/logo/logo-kr.png"
          alt="내일 말고 오늘, 안전한 서물 만들기. 두데이"
          width={1000}
          height={1000}
          style={{ width: '100%', height: 'auto' }}
        />
      </styles.ImageWrapper>
      <styles.WelcomTitle>환영합니다!</styles.WelcomTitle>
      <styles.ButtonWrapper>
        <Button onClick={handleClickBtn} fitContent>
          메인으로 가기
        </Button>
      </styles.ButtonWrapper>
    </Container>
  );
}
