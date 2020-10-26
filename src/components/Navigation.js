import React from 'react'
import styled from 'styled-components/macro'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import BlogPage from './BlogPage'
import CvPage from './CvPage'
import ContactPage from './ContactPage'
import PostEntry from './PostEntry'
import LoginPage from './LoginPage'

export default function Navigation() {
  return (
    <Router>
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
        <Route exact={true} path="/" component={HomePage} />

        <Route path="/about" component={AboutPage} />

        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/blog/postentry" component={PostEntry} />

        <Route path="/contact" component={ContactPage} />

        <Route path="/cv" component={CvPage} />

        <Route path="/login" component={LoginPage} />
        {/* wenn falscher path eingegeben wird: */}
        <Route
          path="/:id"
          render={() => <ErrorMsg>Oops. Falsche Seite Bro</ErrorMsg>}
        />
      </Switch>
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
  /* background: #ededed; */
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
const ErrorMsg = styled.p`
  display: flex;
  font-weight: 500;
  color: white;
  background: red;
  justify-content: center;
  align-items: center;
  width: 70vw;
  margin: 10vh auto;
  border-radius: 5px;
  height: 20vh;
`
