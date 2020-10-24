import React from 'react'
import styled from 'styled-components/macro'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import BlogPage from './BlogPage'
import CvPage from './CvPage'
import ContactPage from './ContactPage'

export default function Navigation() {
  return (
    <Router>
      <div>
        <NavigationContainer>
          <Link to="/">
            <StyledNavigationButton>
              <span>Home</span>
            </StyledNavigationButton>
          </Link>

          <Link to="/blog">
            <StyledNavigationButton>
              <span>Blog</span>
            </StyledNavigationButton>
          </Link>

          <Link to="/cv">
            <StyledNavigationButton>
              <span>CV</span>
            </StyledNavigationButton>
          </Link>

          <Link to="/about">
            <StyledNavigationButton>
              <span>About</span>
            </StyledNavigationButton>
          </Link>

          <Link to="/contact">
            <StyledNavigationButton>
              <span>Contact</span>
            </StyledNavigationButton>
          </Link>
        </NavigationContainer>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/blog">
            <BlogPage />
          </Route>
          <Route path="/cv">
            <CvPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

const NavigationContainer = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: repeat(6, calc(30%));
  overflow: auto;
  white-space: nowrap;
  height: auto;
  background: #ededed;
  padding: 0 0 12px 0;
  height: 16vh;
`

const StyledNavigationButton = styled.button`
  display: inline-block;
  width: 75px;
  height: 75px;
  border-radius: 50px;
  border: 0;
  margin-top: 2.5vh;
  margin-left: 12px;
  background: white;
  border: 0.5px solid red;
  background-image: url('https://cdn.pixabay.com/photo/2017/06/21/07/27/seattle-2426307__480.jpg');

  span {
    display: flex;
    align-content: center;
    justify-content: center;
    margin-top: 11vh;
    color: red;
    font-size: 0.5em;
    font-weight: 100;
    text-decoration: none;
  }
`
