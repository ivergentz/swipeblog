import React from 'react'
import styled from 'styled-components/macro'

export default function Title() {
  return (
    <TitleContainer>
      <PageTitle>Startseite/Unterseite</PageTitle>
    </TitleContainer>
  )
}

const TitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  background: red;
  color: white;
  /* position: sticky; */
  z-index: 100;
  height: 10vh;
`

const PageTitle = styled.h1`
  font-weight: 100;
  margin-left: 8vw;
`
