import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  margin-bottom: 1rem;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 0.5rem;
  color: var(--color-main);
  font-weight: var(--font-semibold);
`;

export const SectionDiv = styled.div`
  width: 100%;
  min-height: 7.5rem;
`;

export const Address = styled.p`
  color: var(--color-gray);
  font-size: var(--font-small);
  text-align: center;
  margin-top: 0.5rem;
`;

export const ImagesDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const ImageUploadButton = styled.button<{ size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
	max-width; 8rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  background-color: var(--color-light-gray);
  cursor: pointer;

  & > svg {
    font-size: 2rem;
    color: var(--color-gray);
  }
`;

export const ModalWrapper = styled.div`
  text-align: center;
  padding: 1rem;
`;

export const ModalTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: var(--font-semibold);
  margin-bottom: 1rem;
`;

export const ModalSubTitle = styled.h3`
  color: var(--color-main);
  margin-bottom: 0.5rem;
`;

export const ButtonWrapper = styled.div`
  margin-top: 1rem;
`;
