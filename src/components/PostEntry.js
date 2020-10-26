import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function PostEntry() {
  return (
    <Container>
      <Header>Neue Fische so ists</Header>
      <StyledArticle>
        Quis elit fugiat nulla dolore dolor officia fugiat fugiat ut. Ea eu
        veniam esse mollit ipsum est exercitation. Est commodo dolor tempor
        deserunt. Nulla dolor amet voluptate minim incididunt in Lorem pariatur
        labore. Quis elit fugiat nulla dolore dolor officia fugiat fugiat ut. Ea
        eu veniam esse mollit ipsum est exercitation. Est commodo dolor tempor
        deserunt. Nulla dolor amet voluptate minim incididunt in Lorem pariatur
        labore.
      </StyledArticle>
      <TextImage src="https://source.unsplash.com/random" alt="" />
      <StyledArticle>
        Quis elit fugiat nulla dolore dolor officia fugiat fugiat ut. Ea eu
        veniam esse mollit ipsum est exercitation. Est commodo dolor tempor
        deserunt. Nulla dolor amet voluptate minim incididunt in Lorem pariatur
        labore. Quis elit fugiat nulla dolore dolor officia fugiat fugiat ut. Ea
        eu veniam esse mollit ipsum est exercitation. Est commodo dolor tempor
        deserunt. Nulla dolor amet voluptate minim incididunt in Lorem pariatur
        labore.
      </StyledArticle>
      <SubHeader>Zwischenüberschrift 1</SubHeader>
      <StyledArticle>
        Quis elit fugiat nulla dolore dolor officia fugiat fugiat ut. Ea eu
        veniam esse mollit ipsum est exercitation. Est commodo dolor tempor
        deserunt. Nulla dolor amet voluptate minim incididunt in Lorem pariatur
        labore. Quis elit fugiat nulla dolore dolor officia fugiat fugiat ut. Ea
        eu veniam esse mollit ipsum est exercitation. Est commodo dolor tempor
        deserunt. Nulla dolor amet voluptate minim incididunt in Lorem pariatur
        labore.
      </StyledArticle>
      <Link to="/blog">
        <BackButton>&#8592; zurück &#8592;</BackButton>
      </Link>
    </Container>
  )
}

const Container = styled.section`
  padding-top: 26vh;
`

const TextImage = styled.img`
  width: 100vw;
  height: 50vh;
  object-fit: cover;
`
const Header = styled.h2`
  margin: 3vh 4vw;
  font-size: 1em;
  font-weight: 500;
`

const StyledArticle = styled.article`
  margin: 2vh 4vw;
  font-weight: 300;
  font-size: 0.8em;
`

const SubHeader = styled.h3`
  margin: 3vh 4vw;
  font-size: 0.9em;
  font-weight: 500;
`

const BackButton = styled.button`
  width: 100vw;
  border: none;
  color: white;
  background: red;
  padding: 0.5em;
  font-weight: 100;
  font-size: 0.6em;
  margin-top: 2vh;
`

// {
//   ;(' ')
// }
// {
//   posts.map((post) => <Card {...post} />)
// }
