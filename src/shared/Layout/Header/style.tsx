import styled from 'styled-components';
import { COLOR } from '../../../common/color';

export const StyledHeader = styled.div`
  height: 80px;
  width: 100%;
  border-bottom: 1px solid rgb(204, 204, 204);
  display: flex;
  justify-content: center;
  background-color: ${COLOR.YELLOW};
  @media screen and (max-width: 800px) {
    height: 150px;
    align-items: center;
  }
`;

export const HeaderContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-left: 13px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 65%;
  @media screen and (max-width: 800px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-right: 20px;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    width: 95%;
    justify-content: center;
  }
`;

export const Logo = styled.img`
  height: 50px;
`;
export const LogoText = styled.div`
  font-size: 24px;
  font-weight: 700;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  height: 30px;
  opacity: 0.8;
  border-radius: 15px;
  border: 1px solid red;
  justify-content: space-evenly;
  width: 270px;
  background-color: white;

  @media screen and (max-width: 800px) {
    margin-top: 30px;
    margin-bottom: 10px;
  }
`;

export const SearchInput = styled.input`
  all: unset;
  padding-left: 20px;
  font-size: 13px;
  width: 100%;
`;

export const SearchSelect = styled.div`
  width: 90%;
  min-width: 260px;
  display: flex;
  padding-left: 10px;
`;

export const SearchBtn = styled.button`
  all: unset;
  margin-top: -6px;
  margin-right: -10px;
  cursor: pointer;
`;

export const HeaderBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 5px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    position: absolute;
    top: 1%;
    right: 1%;
    background-color: 'white';
    gap: 5px;
    /* width: 140px; */
  }
`;

export const HeaderBtn = styled.div`
  font-size: 12px;
  width: 80px;
  margin-left: 10px;
  padding: 3px 0 3px 0;
  cursor: pointer;
  background-color: white;
  border-radius: 15px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 7px;
  }
  @media screen and (max-width: 800px) {
    font-size: 11px;
  }
`;

export const PageBtnBox = styled.div`
  display: flex;
  justify-content: center;
`;
