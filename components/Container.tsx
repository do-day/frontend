import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Props) {
  return <Main>{children}</Main>;
}

const Main = styled.main`
  padding: 5rem 1rem 1rem 1rem;
`;
