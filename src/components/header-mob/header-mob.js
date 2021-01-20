import styled from "styled-components";
import searchImg from "../../assets/images/search-icon.png";
import logo from "../../assets/images/logo_size.jpg";

export const StyledHeader = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
`;

// UpperContent
export const StyledUpperContent = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

export const StyledLogo = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  width: 150px;
  background-position: center;
  height: 90px;
`;

export const StyledSearchDiv = styled.div`
  width: 70%;
  height: 30px;
  display: flex;
  align-items: center;
`;

export const StyledSearchInput = styled.input`
  border: 1px solid black;
  border-radius: 10px;
  width: 90%;
  height: 80%;
`;

export const StyledSearchImg = styled.div`
  background-image: url(${searchImg});
  background-color: #fff;
  background-size: contain;
  background-repeat: no-repeat;
  border: 1px solid black;
  border-radius: 10px;
  width: 25px;
  height: 80%;
`;

export const StyledPublishButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: 1px solid black;
  border-radius: 10px;
  width: 80px;
  height: 60px;
  font-size: 16px;
  background-color: #cc3c3c;
  color: white;
  font-weight: bold;
`;

// NavBar
export const StyledNavBar = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledLeftWing = styled.div`
  background-color: #cc3c3c;
  width: 90%;
  align-self: flex-start;
  height: 33px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledRightWing = styled.div`
  background-color: #cc3c3c;
  width: 90%;
  align-self: flex-end;
  height: 33px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledNavLink = styled.div`
  width: 20%;
  height: 80%;
  font-size: 13px;
  color: white;
  text-align: center;
  line-height: 2;
  font-weight: bold;
`;
