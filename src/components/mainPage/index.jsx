/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import NewsComponent from "../newsComponent";
import propaganda from "../../publicidade2.png";
import axios from "axios";
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

const MainPage = () => {
  const [allNews, setAllNews] = useState([]);
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const headers = { "Access-Control-Allow-Origin": "*" };

  const getNewsData = () => {
    axios
      .get(`https://tech-archive-project.herokuapp.com/news/`, headers)
      .then((resp) => {
        setAllNews(resp.data.data);
        getAllUsers();
      })
      .catch((error) => {
        // erro no request
        console.log(error);
      });
  };

  const getAllUsers = () => {
    axios
      .get(`https://tech-archive-project.herokuapp.com/user/all`, headers)
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const GoToNewsPage = (index) => {
    history.push(`/newsId/${index + 1}`);
  };

  useEffect(() => {
    getNewsData();
    console.log(allNews);
  }, []);

  return (
    <div>
      {window.innerWidth > 640 ? (
        <MainPageContainer>
          <MainPageAdvertising src={propaganda} />

          <MainPageNewsContainer>
            <MainPageNews>
              {allNews.map((news, index) => (
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
              {allNews.reverse().map((news, index) => (
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
