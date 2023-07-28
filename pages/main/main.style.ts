import styled from '@emotion/styled';

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

export const TopBox = styled.div``;

export const TopTitleBox = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const TopDescriptionBox = styled.div`
  font-size: 14px;
  color: #5a5a5a;
`;

export const SearchBox = styled.div`
  margin: 12px 0;
  width: auto;
`;

export const Search = styled.label`
  background-color: #f6f6f6;
  input {
    padding-left: 15px;
    border-radius: 20px;
    background-color: #f6f6f6;
    height: 33px;
    width: 100%;
    border-color: #e8e8e8;
    color: #bdbdbd;
  }
`;

export const ListBox = styled.div`
  margin-top: 7px;
  display: flex;
  padding: 5px 5px 7px 5px;
  width: auto;
  border-bottom: 1px solid #e8e8e8;
`;

export const PicBox = styled.div``;

export const RightBox = styled.div`
  margin: 8px 0 8px 10px;
  width: 100%;
`;

export const ListTopBox = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

export const ListBottomBox = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const ListDateBox = styled.div`
  font-size: 14px;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

export const ListTagBox = styled.div``;

export const Tag = styled.div`
  font-size: 13px;
  font-weight: 700;
  background-color: #7c7c7c;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
`;
