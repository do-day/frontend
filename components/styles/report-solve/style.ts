import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  margin-bottom: 1.5rem;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 0.5rem;
  color: var(--color-main);
  font-size: var(--font-large);
  font-weight: var(--font-bold);
`;

export const SectionDiv = styled.div`
  width: 100%;
  height: 11.5rem;
`;

export const Map = styled.div`
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
`;

export const ImagesDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const ButtonDiv = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ModalWrapper = styled.div`
  text-align: center;
  padding: 1.25rem;
`;

export const ModalTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: var(--font-bold);
  margin-bottom: 1rem;
`;

export const ModalSubTitle = styled.h3`
  color: var(--color-main);
  margin-bottom: 0.5rem;
`;

export const ModalList = styled.ul`
  width: fit-content;
  margin: auto;
  padding-left: 2rem;
  list-style: disc;
  text-align: left;
  line-height: 1.5;
  color: var(--color-dark-gray);
`;

export const ButtonWrapper = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;
