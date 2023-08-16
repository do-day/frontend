import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { BiChevronLeft, BiMenu } from 'react-icons/bi';
import Nav from '@/components/Nav';
import { ROUTES } from '@/constants';
import * as styles from '@/components/styles/Header.style';

interface Props {
  title?: string;
  hasBackButton?: boolean;
}

export default function Header({ title, hasBackButton = false }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const HanldeOnClickBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <styles.Header>
      <styles.Button
        onClick={hasBackButton ? () => router.back() : HanldeOnClickBtn}
        aria-label={hasBackButton ? '뒤로가기' : '메뉴'}
      >
        {hasBackButton ? <BiChevronLeft /> : <BiMenu />}
      </styles.Button>
      {isOpen && <Nav setIsOpen={setIsOpen} />}
      <styles.Title>
        {title ? (
          title
        ) : (
          <Link href={ROUTES.MAIN} style={{ width: 'auto', maxHeight: '2rem' }}>
            <Image
              src="/logo/title-kr.png"
              alt="로고"
              width={220}
              height={80}
              style={{ width: 'auto', height: '100%' }}
            />
          </Link>
        )}
      </styles.Title>
    </styles.Header>
  );
}
