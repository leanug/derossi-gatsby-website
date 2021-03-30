import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Portfolio from '../components/Portfolio'
import SEO from '../components/SEO'
import styled from 'styled-components'

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {type: {in: "portfolio"}}}) {
      nodes {
        id
        frontmatter {
          title
          category
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const PortfolioPage = ({ data }) => {
  const { allMdx: { nodes: projects } } = data

  return (
    <Layout>
       <SEO 
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde est libero nesciunt aliquid autem quisquam."
          title="Our Projects"
        />
          <Portfolio portfolio={ projects } />
    </Layout>
  )
}

export default PortfolioPage
