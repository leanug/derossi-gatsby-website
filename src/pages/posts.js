import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'

const PostsPage = ({ data }) => {
  const { allMdx: { nodes: posts } } = data

  return (
    <Layout>
      <Posts posts={ posts } title="all posts" />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {type: {in: "post"}}}) {
      nodes {
        excerpt
        id
        frontmatter {
          title
          author
          category
          date(formatString: "MMMM, Do, YYYY")
          slug
          readTime
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

export default PostsPage
