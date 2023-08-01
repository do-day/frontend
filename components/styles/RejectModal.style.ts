import styled from '@emotion/styled';

export const ModalContainer = styled.div``;

export const ModalBackdrop = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalView = styled.div`
  width: 19.5rem;
  height: 15rem;
  background-color: white;
  &.fail {
    height: 120px;
  }
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const ModalTitleBox = styled.div`
  display: flex;
  margin: 1rem 1rem 0 1rem;
`;

export const ModalCloseBox = styled.div`
  margin-left: auto;
`;

export const ModalText = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const ModalContentBox = styled.div`
  margin: 0.5rem 1rem;
`;

export const ModalContent = styled.textarea`
  margin: auto;
  width: 17.5rem;
  height: 8rem;
  background-color: #ededed;
  border: none;
  border-radius: 5px;
  padding: 10px;
`;

export const ModalButtonBox = styled.div`
  display: flex;
`;

export const ModalButton = styled.button`
  width: 5.2rem;
  border-radius: 10px;
  height: 2.2rem;
  background-color: #0083cd;
  margin-left: auto;
  margin-right: 1rem;
  color: white;
  font-size: 16px;
  font-weight: 600;
`;
