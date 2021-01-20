import styled from "styled-components"

export const NewsMainContainer = styled.div`
display: flex;
flex-direction: row;
width:90%;
height:80px;
border-bottom: 0.5px solid #BBB;
margin: 10px;

:hover{
  cursor:pointer;
}

@media(max-width:600px)
  {
    width:90vw;
  }
`

export const NewsImageContainer = styled.img`
height: 60px;
width: 7vw;
border: 1px solid red;
margin: 10px 0px 10px 10px;
@media(max-width:600px)
  {
    width:80px;
  }
`

export const NewsTextContainer = styled.div`
display: flex;
flex-direction: column;
margin: 10px 0px 10px 10px;
height: 60px;
width: 65%;

`

export const NewsTextTitle = styled.div`
height: 28px;
margin: 0px 3px 5px 3px;
font-size:12px;
line-height:96%;
@media(max-width:600px)
  {
    font-size:14px;
  }
`

export const NewsTextAuthorDate = styled.div`
height: 10px;
margin: 1px;
font-size:10px;
color: #222;
`

export const NewsTextTheme = styled.div`
height: 10px;
font-size:10px;
color: red;
margin: 1px;
`