import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export default function BlogPage() {
  return (
    <>
      <Container>
        <Link to="/blog/postentry">
          <ThumbnailImage
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            alt=""
          />
          <Category>BlogPost</Category>
          <Title>Hier könnte ihre Werbung stehen</Title>
          <SubTitle>Nu aber schnell mal lesen</SubTitle>
          <ReadMore> &uarr; Zum Artikel &uarr;</ReadMore>
          {/* <Exit>X</Exit> */}
          <Background
            alt=""
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          />
        </Link>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: grid;
  padding: 0;
  margin: 0;
  height: 74vh;
  z-index: 0;
  grid-template-columns: auto;
  overflow: auto;
  white-space: nowrap;
  height: auto;
  padding-top: 26vh;
`

const ThumbnailImage = styled.img`
  position: absolute;
  object-fit: cover;
  height: 30px;
  width: 30px;
  z-index: 100;
  border: 1px solid red;
  border-radius: 50px;
  margin-top: 7vh;
  margin-left: 7vw;
  z-index: 10;
`
const Category = styled.h4`
  position: absolute;
  display: flex;
  color: red;
  background: white;
  border-radius: 3px;
  padding: 3px 7px;
  margin-right: 5px;
  font-size: 0.3em;
  font-weight: 300;
  margin-top: 8vh;
  margin-left: 20vw;
  z-index: 10;
`
const Title = styled.h2`
  position: absolute;
  margin-left: 10%;
  margin-top: 55vh;
  font-weight: 300;
  z-index: 10;
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
  margin-top: 60vh;
  font-weight: 300;
  z-index: 10;
  font-size: 0.6em;
`

const ReadMore = styled.p`
  position: absolute;
  color: white;
  font-size: 0.5em;
  margin: 70vh 0;
  z-index: 10;
  margin-left: 38vw;
`
// const Exit = styled.button`
//   border: none;
//   background: none;
//   position: absolute;
//   color: white;
//   font-size: 0.7em;
//   font-weight: 300;
//   margin-top: 7.5vh;
//   margin-left: 80vw;
//   z-index: 100;
// `

const Background = styled.img`
  object-fit: cover;
  width: 100%;
  height: 76vh;
  position: fixed;
`
