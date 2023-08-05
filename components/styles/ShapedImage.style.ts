import styled from '@emotion/styled';

export const ImageWrapper = styled.div<{ size: string }>`
  width: ${(props) => props.size};
  height: 50vw;
  max-height: 10.5rem;
  & > img {
    border-radius: var(--border-radius);
  }
`;
