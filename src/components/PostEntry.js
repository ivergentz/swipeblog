import React from 'react'
import Card from '../Card'
import items from '../assets/data/CardData'

export default function PostEntry(index) {
  return (
    <div>
      {items.map((post) => (
        <Card key={index} {...post} />
      ))}
      {console.log(items)}
    </div>
  )
}
