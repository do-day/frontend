import { useState } from 'react';
import { useRouter } from 'next/router';
import { BiChevronLeft, BiMenu } from 'react-icons/bi';
import Nav from '@/components/Nav';
import * as styles from '@/components/styles/Header.style';

interface Props {
  title: string;
  type?: string;
}

export default function Header({ title, type }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const HanldeOnClickBtn = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();

  return (
    <styles.Header>
      {type === 'main' ? (
        <>
          <styles.BackButton onClick={HanldeOnClickBtn}>
            <BiMenu />
          </styles.BackButton>
          {isOpen ? <Nav isOpen={isOpen} setIsOpen={setIsOpen} /> : ''}
        </>
      ) : (
        <styles.BackButton onClick={() => router.back()}>
          <BiChevronLeft />
        </styles.BackButton>
      )}
      <styles.Title>{title}</styles.Title>
    </styles.Header>
  );
}
