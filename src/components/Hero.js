import React from 'react';
import Background from './Background'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

const Hero = () => {
    const {
        file: {
          childImageSharp: { fluid },
        },
    } = useStaticQuery( query )

    return (
        <Wrapper>
            <Background image={ fluid } />
        </Wrapper>
    );
};

const query = graphql`
  {
    file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Wrapper = styled.div`
    div {
        align-items: center;
        display: flex;
        height: 100vh;
        width: 100%;
        justify-content: center;
        flex-direction: column;

        h1 {
            line-height: 1.25;
            letter-spacing: 3px;
            margin-bottom: 2rem;
        }

        @media (min-width: 800px) {
            h1 {
                letter-spacing: 5px;
            }

            .content {
                max-width: 80rem;
            }
        }
    }
`

export default Hero;