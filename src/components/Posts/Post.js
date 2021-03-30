import React from 'react'
import Image from 'gatsby-image'
import { FaRegClock } from 'react-icons/fa'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { setColor, setRadius } from '../../styles/'

const Post = ({ frontmatter }) => {
  const { title, image, slug, date, readTime } = frontmatter

  return (
    <Wrapper>
      <Link to={`/posts/${slug}`}>
        <Image fluid={ image.childImageSharp.fluid } className="img" />
      </Link>
      <div className="info">
        <Link to={`/posts/${slug}`}>
          <h4>{ title }</h4>
        </Link>
        <footer>
          <span className="date">
            <FaRegClock className="icon"></FaRegClock>
            { date }
          </span>
          <span>{ readTime } min read</span>
        </footer>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background-color: ${ setColor.colorDelta_3 };
  margin-bottom: 3rem;
  padding: 2rem;
  border-radius: ${ setRadius.radiusBeta };

  .info {
    text-align: center;
  }

  .img {
    margin-bottom: 1rem;
    border-radius: ${ setRadius.radiusBeta };
    height: 17rem;
  }

  .category {
    display: inline-block;
    margin-bottom: 1rem;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  h4 {
    margin: 1.8rem 0 1rem 0;
    text-transform: initial;
  }
  
  .link {
    font-weight: 700;
    display: flex;
    align-items: center;

    svg {
      margin-left: 0.5rem;
    }
  }

  .link:hover {
  }

  footer {
    margin: 1rem 0;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .date {
      display: flex;
      align-items: center;
      & .icon {
        margin-right: 0.5rem;
      }
    }
  }
  @media (min-width: 600px) {
    .img {
      height: 20rem;
    }
  }
  @media (min-width: 800px) {
    .img {
      height: 25rem;
    }
  }
  @media (min-width: 992px) {
    & {
     
      .info {
        text-align: left;
      }
      .img {
        height: 100%;
        max-height: 20rem;
      }
      .underline {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
`

export default Post
