import React from 'react'
import styled from 'styled-components/macro'

export default function HomePage() {
  return (
    <>
      <BlogContainer>
        <Title>Neue Fische - so ists</Title>
        <SubTitle>
          So war mein Bootcamp und ich teile hier die Erfahrungen
        </SubTitle>
      </BlogContainer>
      <BlogContainer>
        <Title>Titel 1</Title>
        <SubTitle>Erster Blogeintrag - mehr lesen...</SubTitle>
      </BlogContainer>
      <BlogContainer>
        <Title>Titel 1</Title>
        <SubTitle>Erster Blogeintrag - mehr lesen...</SubTitle>
      </BlogContainer>
      <BlogContainer>
        <Title>Titel 1</Title>
        <SubTitle>Erster Blogeintrag - mehr lesen...</SubTitle>
      </BlogContainer>
    </>
  )
}

const BlogContainer = styled.section`
  display: grid;
  grid-template-rows: 15vh 5vh 5vh;
  grid-template-columns: 12px auto;
  height: 40vh;
  align-content: center;
  background-image: url('https://cdn.pixabay.com/photo/2017/06/21/07/27/seattle-2426307__480.jpg');
`

const Title = styled.h2`
  position: absolute;
  margin-left: 10%;
  margin-top: 25vh;
  font-weight: 300;
  z-index: 100;
  padding: 0 10px;
  background: red;
  color: white;
  font-size: 0.7em;
  font-weight: 500;
  border-radius: 3px;
`

const SubTitle = styled.h3`
  position: absolute;
  color: white;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 30vh;
  font-weight: 300;
  z-index: 100;
  font-size: 0.6em;
`
