import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { 
  setPostMaxWidth, 
  setColor, 
  setRadius } from '../styles/'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { FaRegUser, FaRegClock } from "react-icons/fa"

const Wrapper = styled.section`
  max-width: 120rem;
  width: 90vw;
  margin: 0 auto;

  .post-info {
    margin: 2rem 0 2.4rem 0;

    p {
      display: flex;
      align-items: center;
    }

    .separator {
      font-size: 1rem;
    }

    span {
      display: flex;
      align-items: center;
      margin-right: 1.5rem;
    }

    .categories > span {
      background-color: ${ setColor.colorDelta_3 };
      border-radius: ${ setRadius.radiusBeta };
      padding: 0.5rem 2rem;
    }

    .icon {
      margin-right: 1rem;
    }

    .categories {
      margin-top: 2rem;
    }

    h1 {
      margin-bottom: 1rem;
    }
  }
  
  .body {
    p {
      margin: 2rem 0;
    }
  }
`

const PostTemplate = ({ data }) => {
  const { 
    mdx: { 
      frontmatter: { title, category, image, date, author, readTime },
      body,
    }, 
  } = data

  return (
    <Layout>
        <Wrapper>
          <article>
            <div className="post-info">
              <h1>{ title }</h1>
              <p>
                <span><FaRegUser className="icon" /> by { author }</span>
                <span><FaRegClock className="icon" />  Updated { date } {readTime}</span>
              </p>
              <p className="categories"> { category.split(',').map( singleCat => {
                return (
                  <span>{singleCat}</span>
                )
              }) } </p>
            </div>
            <Image fluid={ image.childImageSharp.fluid } />
            <div className="body">
              <MDXRenderer>{ body }</MDXRenderer>
            </div>
          </article>
        </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query GetSinglePost ($slug: String){
    mdx( frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        title
        category
        date(formatString: "MMMM Do, YYYY")
        readTime
        author
        slug
        image{
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`

export default PostTemplate
