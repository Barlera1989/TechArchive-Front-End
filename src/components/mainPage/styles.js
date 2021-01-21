import styled from "styled-components"

export const MainPageContainer = styled.div`
display: flex;
flex-direction: row;
width:100vw;
height: 78vh;
`

export const MainPageAdvertising = styled.div`
width: 200px;
border: 1px solid black;
margin: 50px 2vw;
`

export const MainPageNews = styled.div`
display: flex;
flex-direction: column;
border: 1px solid red;
margin: 25px 2vw;
width: 39vw;
@media(max-width:600px)
  {
    width:98vw;
  }
`

export const MainPageDivision = styled.div`
border-left: 0.5px solid gray;
width: 2px;
`