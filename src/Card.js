// import React from 'react'
// import styled from 'styled-components'
// import { string, array } from 'prop-types'
// // import Carousel from 'nuka-carousel'
// // import { animated, interpolate } from 'react-spring'

// Card.propTypes = {
//   title: string,
//   subTitle: string,
//   date: string,
//   tags: array,
// }

// export default function Card(posts, index) {
//   const newArr = Array.from(posts.tags)
//   // console.log('tags array', newArr)
//   return (
//     <Container>
//       <ThumbnailImage
//         src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
//         alt=""
//       />
//       <Category>
//         {newArr.map((tag) => {
//           return <p>{tag}</p>
//         })}
//       </Category>
//       <Title>{posts.title}</Title>
//       <SubTitle>{posts.subTitle}</SubTitle>
//       <ReadMore> &uarr; Zum Artikel &uarr;</ReadMore>
//       <Exit>X</Exit>
//       <BackgroundImage src={'https://source.unsplash.com/random'} alt="" />
//     </Container>
//   )
// }

// const Container = styled.div`
//   display: flex;
//   padding: 0;
//   margin: 0;
//   height: 35vh;
//   z-index: 0;
// `

// const ThumbnailImage = styled.img`
//   position: absolute;
//   object-fit: cover;
//   height: 30px;
//   width: 30px;
//   z-index: 100;
//   border: 1px solid red;
//   border-radius: 50px;
//   margin-top: 7vh;
//   margin-left: 7vw;
//   z-index: 100;
// `
// const Category = styled.h3`
//   position: absolute;
//   display: flex;
//   color: red;
//   background: white;
//   border-radius: 3px;
//   padding: 3px 7px;
//   margin-right: 5px;
//   font-size: 0.3em;
//   font-weight: 300;

//   margin-top: 8vh;
//   margin-left: 20vw;
//   z-index: 100;
// `

// const Title = styled.h2`
//   position: absolute;
//   color: white;
//   margin-left: 10%;
//   margin-top: 20vh;
//   font-weight: 300;
//   z-index: 100;
//   padding: 0 10px;
//   background: red;
//   font-size: 0.7em;
//   font-weight: 500;
// `
// const SubTitle = styled.h1`
//   position: absolute;
//   color: white;
//   margin-left: 10%;
//   margin-right: 10%;
//   margin-top: 25vh;
//   font-weight: 300;
//   z-index: 100;
//   font-size: 0.6em;
// `

// const ReadMore = styled.p`
//   position: absolute;
//   color: white;
//   font-size: 0.5em;
//   margin: 95vh 0;
//   z-index: 100;
//   margin-left: 38vw;
// `

// const BackgroundImage = styled.img`
//   object-fit: cover;
//   width: 100%;
//   height: 35vh;
//   margin-bottom: 0;
//   z-index: 0;
// `
// const Exit = styled.button`
//   border: none;
//   background: none;
//   position: absolute;
//   color: white;
//   font-size: 0.9em;
//   font-weight: 300;
//   margin-top: 9vh;
//   margin-left: 80vw;
//   z-index: 100;
// `

// // export default function Card({ i, x, y, rot, scale, trans, bind, data }) {
// //   const { pics, title, subTitle, date, tags } = data[i]

// //   return (
// //     <animated.div
// //       key={i}
// //       style={{
// //         transform: interpolate(
// //           [x, y],
// //           (x, y) => `translate3d(${x}px,${y}px,0)`
// //         ),
// //       }}
// //     >
// //       <animated.div
// //         {...bind(i)}
// //         style={{
// //           transform: interpolate([rot, scale], trans),
// //         }}
// //       >
// //         <Posts>
// //           <Carousel
// //             renderCenterLeftControls="false"
// //             renderCenterRightControls="false"
// //           >
// //             {pics.map((pic, index) => (
// //               <img src={pic} key={index} alt="" />
// //             ))}
// //           </Carousel>
// //           <h2>{title}</h2>
// //           <h1>{subTitle}</h1>
// //           <h5>{date}</h5>
// //           <h5>{tags}</h5>
// //         </Posts>
// //       </animated.div>
// //     </animated.div>
// //   )
// // }

// // const Posts = styled.span`
// //   color: red;
// // `
