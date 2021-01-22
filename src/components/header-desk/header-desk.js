import styled from "styled-components";
import searchImg from "../../assets/images/search-icon.png";
import logo from "../../assets/images/logo_size.jpg";

export const StyledHeader = styled.div`
  width: 100%;
  height: 198px;
  display: flex;
  flex-direction: column;
`;

// UpperContent
export const StyledUpperContent = styled.div`
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
  cursor: pointer;
`;

export const StyledAdsDiv = styled.img`
  width: 50%;
  height: 85%;
  background-color: #cccccc;
`;

export const StyledPublishButton = styled.button`
  border: none;
  border-radius: 10px;
  width: 20%;
  height: 80%;
  font-size: 22px;
  background-color: #cc3c3c;
  color: white;
  font-weight: bold;
`;

export const StyledPublishContent = styled.div`
  color: white;
  font-weight: bold;
  margin: 20px;
  :hover {
    cursor: pointer;
  }
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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledRightWing = styled.div`
  background-color: #cc3c3c;
  width: 38%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSearchDiv = styled.div`
  width: 24%;
  height: 100%;
  display: flex;
  background-color: #cc3c3c;
  align-items: center;
`;

export const StyledSearchInput = styled.input`
  border: 1px solid #ff0000;
  border-radius: 5px;
  width: 90%;
  height: 80%;
  outline: none;
`;

export const StyledSearchImg = styled.div`
  background-image: url(${searchImg});
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 10px;
  margin-left: 10px;
  width: 45px;
  height: 70%;
`;

export const StyledNavLink = styled.div`
  width: 20%;
  height: 80%;
  font-size: 16px;
  color: white;
  text-align: center;
  line-height: 2;
  font-weight: bold;
  :hover {
    cursor: pointer;
  }
`;
