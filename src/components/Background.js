import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const Background = ({ children, image, styleClass }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
      <BackgroundImage
        Tag="div"
        fluid={ image || fluid }
        preserveStackingContext={true}
      >
        <Wrapper className={ styleClass || "bcg"}>
          {children}
        </Wrapper>
      </BackgroundImage>
  )
}

const Wrapper = styled.div`
  &.banner {
    min-height: 35vh;
    display: grid;
    padding: 10rem 0;
    place-items: center;
  }
`

const query = graphql`
  {
    file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Background
