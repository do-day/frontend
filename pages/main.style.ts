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

export const TopBox = styled.div`
  margin-top: 10px;
`;

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
  margin: 20px 0;
  display: flex;
`;

export const Search = styled.label`
  width: 100%;
  input {
    padding-left: 15px;
    border-radius: 20px;
    background-color: #f6f6f6;
    height: 36px;
    width: 100%;
    border: 1px solid #e8e8e8;
    color: #bdbdbd;
  }
`;

export const SearchIconBtn = styled.button`
  margin-left: -1.6rem;
  margin-top: 0.3rem;
  color: #0083cd;
  background-color: transparent;
`;

export const WriteButton = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 1;
  background-color: #0083cd;
  width: 122px;
  height: 48px;
  border-radius: 25px;
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.25);
`;

export const WriteIcon = styled.div`
  padding: 0.5rem;
  text-align: center;
  & > svg {
    color: var(--color-white);
    font-size: 2rem;
  }
`;

export const WriteTxt = styled.div`
  color: white;
  font-weight: 600;
  font-size: 17px;
`;
