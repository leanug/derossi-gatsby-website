import React from 'react'
import Post from './Post'
import Title from '../Title'
import styled from 'styled-components'
import { setContainer, setGridGap } from '../../styles/'

const Wrapper = styled.section`
  .container {
    ${ setContainer.container };
  }

  .posts-center {
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax( 32rem, 1fr ));
    grid-gap: ${ setGridGap.gridGap };
  }
`

const Posts = ({ posts, title }) => {
  return (
    <Wrapper>
      <div className="container">
        <Title 
          title={ title } 
          text="Cloud bread live-edge direct trade deep"  
        />
        <div className="posts-center">
          { posts.map( post => {
              return <Post key={ post.id } { ...post } />
          })}
        </div>
      </div>
    </Wrapper>
  )
}

export default Posts
