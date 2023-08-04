import styled from '@emotion/styled';

export const ListBox = styled.div`
  max-height: 9rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
`;

export const ImageBox = styled.div`
  flex-basis: 30%;
  position: relative;
  max-width: 7rem;

  &:after {
    display: block;
    content: '';
    padding-bottom: 100%;
    max-height: 7rem;
  }

  & > img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);
  }
`;

export const RightBox = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ListTitle = styled.h2``;

export const ListDate = styled.p`
  font-size: var(--font-small);
  color: var(--color-dark-gray);
`;
