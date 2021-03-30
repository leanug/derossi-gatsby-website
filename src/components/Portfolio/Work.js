import React from 'react'
import Image from 'gatsby-image'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {setBreakpoint, setColor} from '../../styles/'
import Title from '../Title'

const Work = ({frontmatter}) => {
  const { title, image, slug, category } = frontmatter

  return (
    <Wrapper>
      <Link to={`/portfolio/${slug}`} className="link">
        
          <Image fluid={ image.childImageSharp.fluid } className="img" />
         
          <div className="overlay">
            <Title title={title} styleClass="center sigma" text="hola asñdfaksd faj als" />
          </div>
        
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;

  @media screen and ( min-width: ${ setBreakpoint.small } ) {
    min-height: calc(100vh / 2);
  }

  &:hover .overlay {
    opacity: 0.3;
  }

  &:hover .overlay {
    opacity: 1;
  }

  .img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(0,0,0, 0.4);    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 2rem;
    color: ${setColor.sigma};
  }

  .container:hover .overlay {
    opacity: 1;
  }
`

export default Work
