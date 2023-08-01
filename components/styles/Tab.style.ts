import styled from '@emotion/styled';
import { TabDirection } from '@/pages/my/reports';

export const TabBox = styled.div`
  display: flex;
  margin: 0.1rem auto 1rem;
  width: 19rem;
`;

export const LeftBox = styled.div<TabDirection>`
  width: 9rem;
  display: flex;
  justify-content: center;
  border-bottom: ${(props) =>
    props.border === '0' ? '4px solid #6fcbf8' : 'none'};
  color: ${(props) => (props.border === '0' ? '#039BE5' : '#BDBDBD')};
  font-weight: ${(props) => (props.border === '0' ? '600' : '400')};
  height: 2rem;
  font-size: 16px;
`;

export const RightBox = styled.div<TabDirection>`
  margin-left: 1rem;
  width: 9rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  border-bottom: ${(props) =>
    props.border === '1' ? '4px solid #6fcbf8' : 'none'};
  font-size: 16px;
  color: ${(props) => (props.border === '1' ? '#039BE5' : '#BDBDBD')};
  font-weight: ${(props) => (props.border === '1' ? '600' : '400')};
`;
