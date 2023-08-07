import styled from '@emotion/styled';

export const ImageWrapper = styled.div<{ size: string }>`
  width: ${(props) => props.size};
  height: 50vw;
  max-height: 10.5rem;
  position: relative;

  & > img {
    border-radius: var(--border-radius);
  }
`;

export const DeleteButton = styled.button`
  width: var(--font-x-large);
  height: var(--font-x-large);
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  font-size: var(--font-x-large);
  background-color: var(--color-light-gray);
  border-radius: 50%;
  cursor: pointer;
`;
