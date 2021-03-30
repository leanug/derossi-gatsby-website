import React from 'react';
import Background from './Background'
import { Link } from 'gatsby'
import { setColor } from '../styles'
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
            <Background image={ fluid } >
            </Background>
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
        width: 100vw;
        justify-content: center;
        flex-direction: column;

        h1 {
            line-height: 1.25;
            letter-spacing: 3px;
            margin-bottom: 2rem;
        }

        .content {
            margin: 2rem 0 3rem 0;
            max-width: 90vw;
            text-align: center;
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