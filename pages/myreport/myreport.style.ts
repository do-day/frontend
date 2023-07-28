import styled from '@emotion/styled';
import { TabDirection } from '.';

export const Container = styled.div`
  width: 375px;
  background-color: white;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  height: 40px;
`;

export const MenuBox = styled.div`
  position: absolute;
  top: 25px;
`;

export const LogoBox = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;

export const TabBox = styled.div`
  display: flex;
  margin: 1rem auto;
  width: 19rem;
`;

export const LeftBox = styled.div<TabDirection>`
  width: 9rem;
  display: flex;
  justify-content: center;
  border-bottom: ${(props) =>
    props.border === true ? '4px solid #6fcbf8' : 'none'};
  color: ${(props) => (props.border === true ? '#039BE5' : '#BDBDBD')};
  font-weight: ${(props) => (props.border === true ? '600' : '400')};
  height: 2rem;
  font-size: 16px;
`;

export const RightBox = styled.div<TabDirection>`
  margin-left: 1rem;
  width: 9rem;
  display: flex;
  justify-content: center;
  border-bottom: ${(props) =>
    props.border === false ? '4px solid #6fcbf8' : 'none'};
  font-size: 16px;
  color: ${(props) => (props.border === false ? '#039BE5' : '#BDBDBD')};
  font-weight: ${(props) => (props.border === false ? '600' : '400')};
`;
