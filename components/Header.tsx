import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { BiChevronLeft, BiMenu } from 'react-icons/bi';
import { useState } from 'react';
import Nav from './Nav';

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
    <StyledHeader>
      {type === 'main' ? (
        <>
          <BackButton onClick={HanldeOnClickBtn}>
            <BiMenu />
          </BackButton>
          {isOpen ? <Nav isOpen={isOpen} setIsOpen={setIsOpen} /> : ''}
        </>
      ) : (
        <BackButton onClick={() => router.back()}>
          <BiChevronLeft />
        </BackButton>
      )}
      <Title>{title}</Title>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  max-width: 36rem;
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 1rem;
  font-size: var(--font-large);
  background-color: var(--color-white);
  z-index: 5;
`;

const BackButton = styled.button`
  width: 2rem;
  height: 2rem;
  position: absolute;
  border: none;
  background: none;
  & > svg {
    font-size: 2rem;
  }
`;

const Title = styled.h1`
  flex: 1 1 0%;
  text-align: center;
  font-weight: var(--font-semibold);
  line-height: 1.75;
`;
