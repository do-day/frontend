import styled from '@emotion/styled';

const Tag = () => {
  return (
    <ListTagBox>
      <TagBox>미해결</TagBox>
    </ListTagBox>
  );
};

export const ListTagBox = styled.div``;

export const TagBox = styled.div`
  width: fit-content;
  padding: 0.25rem 0.5rem;
  line-height: 1rem;
  font-size: var(--font-x-small);
  font-weight: var(--font-bold);
  color: var(--color-white);
  background-color: var(--color-dark-gray);
  border-radius: var(--border-rounded);
`;

export default Tag;
