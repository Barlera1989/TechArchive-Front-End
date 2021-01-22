import styled from "styled-components";

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 78vh;
`;

export const MainPageAdvertising = styled.img`
  width: 140px;
  border: none;
  margin: 50px 2vw;
`;

export const MainPageNewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 70vw;
  margin: 25px 0px;
`;

export const MainPageNews = styled.div`
  display: flex;
  flex-direction: column;

  margin: 15px 0px;
  width: 39vw;
  @media (max-width: 600px) {
    width: 98vw;
  }
`;

export const MainPageDivision = styled.div`
  border-left: 0.5px solid gray;
  width: 2px;
  margin: 30px 0px;
`;
