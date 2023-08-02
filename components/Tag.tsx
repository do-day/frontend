import styled from '@emotion/styled';

interface TProps {
  state: 'UNAPPROVAL' | 'UNRESOLVED' | 'RESOLVING' | 'RESOLVED' | 'REJECTED';
}

interface State {
  state: string;
}

const Tag = ({ state }: TProps) => {
  const bundle = {
    UNAPPROVAL: '승인 전',
    UNRESOLVED: '미해결',
    RESOLVING: '해결중',
    RESOLVED: '해결완료',
    REJECTED: '반려',
  };
  return (
    <ListTagBox>
      <TagBox state={state}>{bundle[state]}</TagBox>
    </ListTagBox>
  );
};

export const ListTagBox = styled.div``;

export const TagBox = styled.div<State>`
  width: fit-content;
  padding: 0.25rem 0.5rem;
  line-height: 1rem;
  font-size: var(--font-x-small);
  font-weight: var(--font-bold);
  color: var(--color-white);
  background-color: ${(props) =>
    props.state === 'UNAPPROVAL'
      ? 'var(--color--unapproval)'
      : props.state === 'UNRESOLVED'
      ? 'var(--color--unresolved)'
      : props.state === 'RESOLVING'
      ? 'var(--color--resolving)'
      : props.state === 'RESOLVED'
      ? 'var(--color--resolved)'
      : 'var(--color--rejected)'};

  border-radius: var(--border-rounded);
`;

export default Tag;
