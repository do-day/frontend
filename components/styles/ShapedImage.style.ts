import styled from '@emotion/styled';

export const ImageWrapper = styled.div<{ size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  max-height: 10.5rem;
  & > img {
    border-radius: var(--border-radius);
  }
`;
