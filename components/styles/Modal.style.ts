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
  height: 11rem;
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
  margin: 2.5rem auto 0.1rem;
`;

export const ModalText = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export const ModalButtonBox = styled.div`
  display: flex;
  margin: 2.3rem auto 0;
`;

export const ModalLeftBtn = styled.button`
  width: 7.5rem;
  border-radius: 10px;
  background-color: white;
  height: 2.7rem;
  border: 3px solid #0083cd;
  color: #0083cd;
  font-size: 16px;
  font-weight: 600;
`;

export const ModalRightBtn = styled.button`
  width: 7.5rem;
  border-radius: 10px;
  height: 2.7rem;
  background-color: #0083cd;
  margin-left: 1.5rem;
  color: white;
  font-size: 16px;
  font-weight: 600;
`;
