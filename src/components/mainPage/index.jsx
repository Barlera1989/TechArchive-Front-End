import React from "react"
import NewsComponent from '../newsComponent'


import {
  MainPageContainer,
  MainPageAdvertising,
  MainPageNews
} from "./styles"


const MainPage = () => {

  const GoToNewsPage = () => {
    console.log('clicked!')

  }


  return (
    <div>
      {window.innerWidth > 640 ? <MainPageContainer onClick={() => GoToNewsPage()}>
        <MainPageAdvertising>Propaganda</MainPageAdvertising>
        <MainPageNews>
          <NewsComponent />
          <NewsComponent />
          <NewsComponent />
        </MainPageNews>
        <MainPageNews>
          <NewsComponent />
          <NewsComponent />
          <NewsComponent />
        </MainPageNews>
        <MainPageAdvertising>Propaganda</MainPageAdvertising>
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