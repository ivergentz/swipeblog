import React from 'react'
import { postdata } from '../assets/data/data'

export default function PageData() {
  return (
    <div>
      {postdata.map((item) => {
        return (
          <div
            title={item.title}
            subText={item.SubTitle}
            image={item.image}
            smallImage={item.smallImage}
            tags={item.tags}
            id={item.id}
          ></div>
        )
      })}
      {console.log('PageData', postdata)}
    </div>
  )
}
