import React from 'react'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const CategoryTemplate = props => {
  const {
    pageContext: { category },
  } = props

  const {
    data: {
      categories: { nodes: posts },
    },
  } = props 

  return (
    <Layout>
      <Posts posts={ posts } title={ `category / ${ category }` } />
    </Layout>
  )
}

export const query = graphql`
  query GetCategories($category:String) {
    categories: allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {category: {eq: $category}}}) {
      distinct(field: frontmatter___category)
      nodes {
        excerpt
        frontmatter {
          title
          author
          category
          date
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          slug
          readTime
        }
        id
      }
    }
  }

`

export default CategoryTemplate
