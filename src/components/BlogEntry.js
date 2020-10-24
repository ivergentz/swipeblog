import React from 'react'
import styled from 'styled-components/macro'

export default function BlogEntry() {
  return (
    <>
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
  height: 30vh;
  background: lightgrey;
  align-content: center;
`

const Title = styled.h2`
  padding-left: 12px;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
  background: red;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 3px;
  width: 35vw;
  height: 5vh;
`

const SubTitle = styled.h3`
  font-size: 0.8em;
  font-weight: 300;
  grid-row-start: 3;
  grid-row-end: 4;
  grid-column-start: 2;
  grid-column-end: 3;
  color: white;
`
