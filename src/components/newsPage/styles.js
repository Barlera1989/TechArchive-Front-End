import styled from "styled-components";

export const NewsPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 78vh;
`;
export const NewsPageAdvertising = styled.img`
  width: 140px;
  margin: 50px 20px;
  border: none;
`;

export const NewsPageNews = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0px;
  width: 70vw;
  @media (max-width: 600px) {
    width: 98vw;
  }
`;

export const NewsPageTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NewsPageInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 5%;
  @media (max-width: 600px) {
    position: absolute;
    right: 20px;
  }
`;

export const NewsPageTitle = styled.div`
  font-size: 20px;
  width: 300px;
  @media (max-width: 600px) {
    width: 250px;
  }
`;

export const NewsPageContent = styled.div`
  font-size: 16px;
  margin: 30px;
`;

export const NewsPageAuthor = styled.div`
  font-size: 12px;
`;

export const NewsPageDate = styled.div`
  font-size: 12px;
`;

export const NewsPageCategories = styled.div`
  font-size: 12px;
`;
