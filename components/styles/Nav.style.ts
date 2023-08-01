import styled from '@emotion/styled';

export const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.4);
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

export const FlexBox = styled.div`
  background-color: white;
  position: absolute;
  z-index: 11;
  height: 100%;
  width: 15rem;
  left: 0%;
  &.fail {
    height: 100%;
  }
`;

export const MainBox = styled.div`
  font-size: 18px;
  font-weight: 700;
  padding: 20px;
  margin-top: 5px;
`;

export const SubMenuBox = styled.div`
  font-weight: 400;
  margin-top: 30px;
  margin-left: 20px;
`;

export const SubMenuNameBox = styled.div`
  margin-left: 15px;
  margin-top: 35px;
`;

export const LogOutBox = styled.div`
  position: fixed;
  left: 10.5rem;
  bottom: 1rem;
  color: #0083cd;
  text-decoration: underline;
  font-size: 16px;
`;
