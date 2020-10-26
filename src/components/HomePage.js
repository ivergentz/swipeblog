import React from 'react'
import styled from 'styled-components/macro'
import { postdata } from '../assets/data/data'

export default function HomePage({ item, title, SubText, id }) {
  console.log('HomePage', postdata)

  return (
    <Container>
      <SubHeader>asjdfkh</SubHeader>
      <ThumbnailImage />
      <EntryText>
        Elit exercitation sint est exercitation nulla. Commodo consectetur
        consequat voluptate nostrud sit tempor velit est nostrud aliquip. Non
        labore quis ipsum et pariatur ut excepteur tempor ullamco pariatur sit
        nostrud. In sint anim ut consequat magna velit eiusmod reprehenderit
        amet sit labore.
      </EntryText>
      <SubHeader>3 Latest Blogposts</SubHeader>

      <BlogContainer key={id}>
        <Title>{title}</Title>
        <SubTitle>sadf</SubTitle>
      </BlogContainer>
    </Container>
  )
}

const Container = styled.section`
  padding-top: 26vh;
`

const BlogContainer = styled.section`
  display: grid;
  grid-template-rows: 15vh 5vh 5vh;
  grid-template-columns: 12px auto;
  height: 40vh;
  align-content: center;
  background-image: url('https://cdn.pixabay.com/photo/2017/06/21/07/27/seattle-2426307__480.jpg');
`

const SubHeader = styled.h2`
  color: red;
  font-weight: 300;
  margin: 2vh;
`
const ThumbnailImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: none;
  margin-top: 2.5vh;
  margin-left: 12px;
  background: red;
`

const EntryText = styled.p`
  display: flex;
  margin: 2vh;
  font-size: 0.9em;
`

const Title = styled.h3`
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

const SubTitle = styled.h4`
  position: absolute;
  color: white;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 30vh;
  font-weight: 300;
  z-index: 100;
  font-size: 0.6em;
`
