/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import propaganda from "../../publicidade2.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  NewsPageContainer,
  NewsPageNews,
  NewsPageAdvertising,
  NewsPageTopContainer,
  NewsPageInfoContainer,
  NewsPageTitle,
  NewsPageContent,
  NewsPageAuthor,
  NewsPageDate,
  NewsPageCategories,
} from "./styles";

const NewsPage = () => {
  const [allNews, setAllNews] = useState([]);
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  const headers = { "Access-Control-Allow-Origin": "*" };

  const getNewsData = () => {
    axios
      .get(`https://tech-archive-project.herokuapp.com/news/`, headers)
      .then((resp) => {
        setAllNews(resp.data.data[parseInt(id) - 1]);
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

  useEffect(() => {
    getNewsData();
  }, []);

  return (
    <div>
      {window.innerWidth > 640 ? (
        <NewsPageContainer>
          <NewsPageAdvertising src={propaganda} />

          <NewsPageNews>
            <NewsPageTopContainer>
              <NewsPageTitle>{allNews.title}</NewsPageTitle>

              <NewsPageInfoContainer>
                <NewsPageAuthor>
                  {users.map(({ id, name }) => {
                    console.log(id, name, allNews.author);
                    if (id === allNews.author) {
                      return name;
                    }
                  })}
                </NewsPageAuthor>
                <NewsPageDate>{allNews.create_at}</NewsPageDate>
                <NewsPageCategories>Tecnologia</NewsPageCategories>
              </NewsPageInfoContainer>
            </NewsPageTopContainer>
            <NewsPageContent>{allNews.content} </NewsPageContent>
          </NewsPageNews>
          <NewsPageAdvertising src={propaganda} />
        </NewsPageContainer>
      ) : (
        <NewsPageContainer>
          <NewsPageNews>
            <NewsPageTopContainer>
              <NewsPageTitle>Uma noticia bem legal</NewsPageTitle>

              <NewsPageInfoContainer>
                <NewsPageAuthor>Eu mesmo</NewsPageAuthor>
                <NewsPageDate>20 de janeiro</NewsPageDate>
                <NewsPageCategories>Tecnologia</NewsPageCategories>
              </NewsPageInfoContainer>
            </NewsPageTopContainer>

            <NewsPageContent>
              Mussum Ipsum, cacilds vidis litro abertis. Mais vale um bebadis
              conhecidiss, que um alcoolatra anonimis. Copo furadis é disculpa
              de bebadis, arcu quam euismod magna. Admodum accumsan disputationi
              eu sit. Vide electram sadipscing et per. Si num tem leite então
              bota uma pinga aí cumpadi! Praesent vel viverra nisi. Mauris
              aliquet nunc non turpis scelerisque, eget. Paisis, filhis,
              espiritis santis. Em pé sem cair, deitado sem dormir, sentado sem
              cochilar e fazendo pose. Praesent malesuada urna nisi, quis
              volutpat erat hendrerit non. Nam vulputate dapibus. Suco de
              cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e
              fermentis. Não sou faixa preta cumpadi, sou preto inteiris,
              inteiris. Interessantiss quisso pudia ce receita de bolis, mais
              bolis eu num gostis. Mé faiz elementum girarzis, nisi eros
              vermeio. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non
              tellus tristique interdum. A ordem dos tratores não altera o pão
              duris. Sapien in monti palavris qui num significa nadis i pareci
              latim.{" "}
            </NewsPageContent>
          </NewsPageNews>
        </NewsPageContainer>
      )}
    </div>
  );
};

export default NewsPage;
