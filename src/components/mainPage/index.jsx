/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import NewsComponent from '../newsComponent'
import propaganda from "../../publicidade2.png"
import axios from 'axios'

import {
  NewsMainContainer,
  NewsImageContainer,
  NewsTextContainer,
  NewsTextTitle,
  NewsTextAuthorDate,
  NewsTextTheme,
} from "../newsComponent/styles"

import {
  MainPageContainer,
  MainPageAdvertising,
  MainPageNews,
  MainPageNewsContainer,
  MainPageDivision
} from "./styles"


const MainPage = () => {
  const [allNews, setAllNews] = useState([])
  const history = useHistory()

  const headers = { 'Access-Control-Allow-Origin': '*' }


  const getNewsData = () => {
    axios.get(`https://tech-archive-project.herokuapp.com/news/`,
      headers
    )
      .then(resp => {
        setAllNews(resp.data.data)

      })
      .catch((error) => { // erro no request
        console.log(error)
      })
  }



  const GoToNewsPage = (index) => {
    history.push(`/newsId/${index + 1}`)
  }


  useEffect(() => {
    getNewsData()
    console.log(allNews)
  }, [])




  return (
    <div>
      {window.innerWidth > 640 ? <MainPageContainer>
        <MainPageAdvertising src={propaganda} />

        <MainPageNewsContainer>
          <MainPageNews>
            {allNews.map((news, index) => (
              <NewsMainContainer key={index} onClick={() => GoToNewsPage(index)}>
                <NewsImageContainer></NewsImageContainer>
                <NewsTextContainer>
                  <NewsTextTitle>{news.title}</NewsTextTitle>
                  <NewsTextAuthorDate>Rafael,{news.create_at}</NewsTextAuthorDate>
                  <NewsTextTheme>Tecnologia</NewsTextTheme>
                </NewsTextContainer>
              </NewsMainContainer>))}
          </MainPageNews>
          <MainPageDivision></MainPageDivision>
          <MainPageNews>
            {allNews.map((news, index) => (
              <NewsMainContainer key={index} onClick={() => GoToNewsPage()}>
                <NewsImageContainer></NewsImageContainer>
                <NewsTextContainer>
                  <NewsTextTitle>{news.title}</NewsTextTitle>
                  <NewsTextAuthorDate>Rafael,{news.create_at}</NewsTextAuthorDate>
                  <NewsTextTheme>Tecnologia</NewsTextTheme>
                </NewsTextContainer>
              </NewsMainContainer>))}
          </MainPageNews>
        </MainPageNewsContainer>
        <MainPageAdvertising src={propaganda} />
      </MainPageContainer> :
        <MainPageContainer>
          <MainPageNews>
            <NewsComponent />
            <NewsComponent />
            <NewsComponent />
          </MainPageNews>
        </MainPageContainer>}
    </div>

  )
}

export default MainPage