import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

const navLinks = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'CV',
    path: '/cv',
  },
  {
    title: 'contact',
    path: '/contact',
  },
]

export default function Navigation() {
  return (
    <>
      <TitleContainer>
        <PageTitle>Yuuuuup!</PageTitle>
      </TitleContainer>
      <NavigationContainer>
        {navLinks.map((link, index) => (
          <Link to={link.path}>
            <StyledNavigationButton key={index}>
              <p>{link.title}</p>
            </StyledNavigationButton>
          </Link>
        ))}
      </NavigationContainer>
    </>
  )
}

const TitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  background: red;
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  height: 10vh;
`

const PageTitle = styled.h1`
  font-weight: 100;
  margin-left: 8vw;
`

const NavigationContainer = styled.ul`
  display: grid;
  width: 100vw;
  align-content: center;
  grid-template-columns: repeat(6, calc(30%));
  overflow: auto;
  height: auto;
  background: white;
  padding: 0 0 4vh 0;
  height: 16vh;
  margin-top: 10vh;
  position: fixed;
  z-index: 100;
  scroll-behavior: smooth;
`

const StyledNavigationButton = styled.li`
  display: grid;
  width: 75px;
  height: 75px;
  border-radius: 50px;
  border: 0;
  margin-top: 2.5vh;
  margin-left: 12px;
  border: 0.5px solid red;
  background: red;
  align-content: center;
  justify-content: center;
  p {
    color: white;
    font-size: 0.5em;
    font-weight: 300;
    text-transform: lowercase;
  }
`
