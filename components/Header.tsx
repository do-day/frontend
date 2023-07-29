import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { BiChevronLeft } from 'react-icons/bi';

interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  const router = useRouter();

  return (
    <StyledHeader>
      <BackButton onClick={() => router.back()}>
        <BiChevronLeft />
      </BackButton>
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
