import React from 'react'
import Card from '../Card'
import posts from '../assets/data/CardData'

export default function PostEntry() {
  return (
    <>
      {posts.map((post) => (
        <Card {...post} />
      ))}
    </>
  )
}
