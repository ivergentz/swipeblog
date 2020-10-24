import React from 'react'
import styled from 'styled-components/macro'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './HomePage'
import BlogPage from './BlogPage'

export default function Navigation() {
  return (
    <>
      <Router>
        <NavigationContainer>
          <Link to="/">
            <StyledNavigationButton>
              <CategoryText>Home</CategoryText>
            </StyledNavigationButton>
          </Link>

          <Link to="/blog">
            <StyledNavigationButton>
              <CategoryText>Blog</CategoryText>
            </StyledNavigationButton>
          </Link>

          <Link to="/about">
            <StyledNavigationButton>
              <CategoryText>About</CategoryText>
            </StyledNavigationButton>
          </Link>

          <Link to="/cv">
            <StyledNavigationButton>
              <CategoryText>CV</CategoryText>
            </StyledNavigationButton>
          </Link>

          <Link to="/contact">
            <StyledNavigationButton>
              <CategoryText>Contact</CategoryText>
            </StyledNavigationButton>
          </Link>
        </NavigationContainer>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>

          <Route path="/blog">
            <BlogPage />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

const NavigationContainer = styled.section`
  display: grid;
  align-content: center;
  grid-template-columns: repeat(6, calc(30%));
  overflow: auto;
  white-space: nowrap;
  height: auto;
  /* background: grey; */
  padding: 10px;
`

const StyledNavigationButton = styled.button`
  display: inline-block;
  width: 75px;
  height: 75px;
  border-radius: 50px;
  border: 0;
`

const CategoryText = styled.p`
  color: red;
  font-size: 0.5em;
  font-weight: 400;
`
