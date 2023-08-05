import styled from '@emotion/styled';
import { State } from '@/types';

interface TProps {
  state: State;
}

const Tag = ({ state }: TProps) => {
  const bundle = {
    UNAPPROVAL: '승인 전',
    UNRESOLVED: '미해결',
    RESOLVING: '해결 중',
    RESOLVED: '해결완료',
    REJECTED: '반려',
    CONFIRMED: '승인완료',
  };
  return (
    <ListTagBox>
      <TagBox state={state}>{bundle[state]}</TagBox>
    </ListTagBox>
  );
};

export const ListTagBox = styled.div``;

export const TagBox = styled.div<{ state: State }>`
  width: fit-content;
  padding: 0.25rem 0.5rem;
  line-height: 1rem;
  font-size: var(--font-x-small);
  font-weight: var(--font-bold);
  color: var(--color-white);
  background-color: ${(props) =>
    props.state === 'UNAPPROVAL'
      ? 'var(--color-unapproval)'
      : props.state === 'UNRESOLVED'
      ? 'var(--color-unresolved)'
      : props.state === 'RESOLVING'
      ? 'var(--color-resolving)'
      : props.state === 'RESOLVED'
      ? 'var(--color-resolved)'
      : props.state === 'REJECTED'
      ? 'var(--color-rejected)'
      : 'var(--color-confirmed)'};

  border-radius: var(--border-rounded);
`;

export default Tag;
