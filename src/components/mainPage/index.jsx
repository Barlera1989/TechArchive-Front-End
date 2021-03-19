/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useHistory } from "react-router-dom";
import NewsComponent from "../newsComponent";
import propaganda from "../../publicidade2.png";
import image from "../../image.jpg";

import {
  NewsMainContainer,
  NewsImageContainer,
  NewsTextContainer,
  NewsTextTitle,
  NewsTextAuthorDate,
  NewsTextTheme,
} from "../newsComponent/styles";

import {
  MainPageContainer,
  MainPageAdvertising,
  MainPageNews,
  MainPageNewsContainer,
  MainPageDivision,
} from "./styles";

const MainPage = ({ users, news }) => {
  const history = useHistory();

  const GoToNewsPage = (index) => {
    history.push(`/newsId/${index + 1}`);
  };


  return (
    <div>
      {window.innerWidth > 640 ? (
        <MainPageContainer>
          <MainPageAdvertising src={propaganda} />
          <MainPageNewsContainer>
            <MainPageNews>
              {news.map((news, index) => (
                <NewsMainContainer
                  key={index}
                  onClick={() => GoToNewsPage(index)}
                >
                  <NewsImageContainer src={image} />
                  <NewsTextContainer>
                    <NewsTextTitle>{news.title}</NewsTextTitle>
                    <NewsTextAuthorDate>
                      {users.map(({ id, name }) => {
                        if (id === news.author) {
                          return name;
                        }
                        return ''
                      })}
                      ,{news.create_at}
                    </NewsTextAuthorDate>
                    <NewsTextTheme>news.</NewsTextTheme>
                  </NewsTextContainer>
                </NewsMainContainer>
              ))}
            </MainPageNews>
            <MainPageDivision></MainPageDivision>
            <MainPageNews>
              {news.reverse().map((news, index) => (
                <NewsMainContainer
                  key={index}
                  onClick={() => GoToNewsPage(index)}
                >
                  <NewsImageContainer src={image} />
                  <NewsTextContainer>
                    <NewsTextTitle>{news.title}</NewsTextTitle>
                    <NewsTextAuthorDate>
                      {users.map(({ id, name }) => {
                        if (id === news.author) {
                          return name;
                        }
                        return ''
                      })}
                      ,{news.create_at}
                    </NewsTextAuthorDate>
                    <NewsTextTheme>Tecnologia</NewsTextTheme>
                  </NewsTextContainer>
                </NewsMainContainer>
              ))}
            </MainPageNews>
          </MainPageNewsContainer>
          <MainPageAdvertising src={propaganda} />
        </MainPageContainer>
      ) : (
          <MainPageContainer>
            <MainPageNews>
              <NewsComponent />
              <NewsComponent />
              <NewsComponent />
            </MainPageNews>
          </MainPageContainer>
        )}
    </div>
  );
};

export default MainPage;
