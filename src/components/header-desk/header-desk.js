import styled from "styled-components";
import searchImg from "../../assets/images/search-icon.png";

export const StyledHeader = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledLeftWing = styled.div`
  background-color: red;
  width: 38%;
  height: 100%;
`;

export const StyledRightWing = styled.div`
  background-color: red;
  width: 38%;
  height: 100%;
`;

export const StyledSearchDiv = styled.div`
  width: 20%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledSearchInput = styled.input`
  border: 1px solid black;
  width: 90%;
  height: 100%;
`;

export const StyledSearchImg = styled.div`
  background-image: url(${searchImg});
  background-size: contain;
  background-repeat: no-repeat;
  border: 1px solid black;
  width: 45px;
  height: 100%;
`;
