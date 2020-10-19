import React from 'react'
import styled from 'styled-components'

export default function TagRow({ tags }) {
  return (
    <TagsContainer>
      {tags.map((tag, index) => (
        <Tag key={index}>{tag.toUpperCase}</Tag>
      ))}
    </TagsContainer>
  )
}

const TagsContainer = styled.section`
  display: flex;
`

const Tag = styled.span`
  background: red;
`
