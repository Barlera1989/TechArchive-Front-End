import styled from "styled-components";
import searchImg from "../../assets/images/search-icon.png";
import logo from "../../assets/images/logo_size.jpg";

export const StyledHeader = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 198px;
  display: flex;
  flex-direction: column;
`;

// UpperContent
export const StyledUpperContent = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledLogo = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  width: 20%;
  background-position: center;
  height: 100%;
`;

export const StyledAdsDiv = styled.div`
  border: 1px solid black;
  width: 50%;
  height: 80%;
  background-color: #cccccc;
`;

export const StyledPublishButton = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  width: 20%;
  height: 80%;
  font-size: 22px;
  background-color: #cc3c3c;
  color: white;
  font-weight: bold;
`;

// NavBar
export const StyledNavBar = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLeftWing = styled.div`
  background-color: #cc3c3c;
  width: 38%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledRightWing = styled.div`
  background-color: #cc3c3c;
  width: 38%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSearchDiv = styled.div`
  width: 24%;
  height: 100%;
  display: flex;
  background-color: #cccccc;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  /* justify-content: space-around; */
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
  width: 45px;
  height: 80%;
`;

export const StyledNavLink = styled.div`
  width: 20%;
  height: 80%;
  font-size: 16px;
  color: white;
  text-align: center;
  line-height: 2;
  font-weight: bold;
`;
