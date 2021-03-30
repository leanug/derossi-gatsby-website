import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SEO from '../components/SEO'

export const query = graphql`
  query GetSingleProject ($slug: String){
    mdx( frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        title
        category
        date(formatString: "MMMM Do, YYYY")
        slug
        image{
          childImageSharp {
            fluid(quality: 100, maxWidth: 6000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`

const PortfolioTemplate = ({ data }) => {
  const { 
    mdx: { 
      frontmatter: { title, category, image, date },
      body,
    }, 
  } = data

  return (
    <Layout>
        <SEO 
            description="Project Description"
            title={ title }
        />
        <Wrapper>
            <article className="container">
                <div className="project-info">
                    <h1>{ title }</h1>
                    <p>{ category } <span className="separator">&#9679;</span> { date }</p>
                </div>
                <Image fluid={ image.childImageSharp.fluid } />
                <MDXRenderer>{ body }</MDXRenderer>
            </article>
        </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  margin: 14rem auto;

  .project-info {
    margin: 2rem 0 2.4rem 0;

    p {
      display: flex;
      align-items: center;
    }

    .separator {
      font-size: 1rem;
    }

    span {
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
    }

    h1 {
      font-size: 4.8rem;
      margin-bottom: 1.2rem;
    }

    .gatsby-image-wrapper {
      margin-bottom: 6rem;
    }
  }  
`

export default PortfolioTemplate
