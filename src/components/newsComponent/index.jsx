import React, { useState } from "react"
import { useHistory } from 'react-router-dom'


import {
  NewsMainContainer,
  NewsImageContainer,
  NewsTextContainer,
  NewsTextTitle,
  NewsTextAuthorDate,
  NewsTextTheme,
} from "./styles"


const NewsPage = () => {
  const history = useHistory()

  const GoToNewsPage = () => {
    history.push('/newsId')

  }


  return (

    <NewsMainContainer onClick={() => GoToNewsPage()}>
      <NewsImageContainer></NewsImageContainer>
      <NewsTextContainer>
        <NewsTextTitle>Um Texto grande, tão grande que precisa de 3 pontos no final</NewsTextTitle>
        <NewsTextAuthorDate>Um cara por ai, 21 de Janeiro</NewsTextAuthorDate>
        <NewsTextTheme>Tecnologia</NewsTextTheme>
      </NewsTextContainer>
    </NewsMainContainer>
  )
}

export default NewsPage