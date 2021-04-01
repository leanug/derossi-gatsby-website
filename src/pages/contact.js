import React from 'react'
import Background from '../components/Background'
import Contact from '../components/Contact'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import styled from 'styled-components'
import Title from '../components/Title'
import { setGrid } from '../styles'

const PostsPage = ({data}) =>  (
    <Layout>
        <SEO 
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, suscipit?"
            title="Contact Omega Architecture"
        />
        <Wrapper>
            <Background 
                image={ data.img1.childImageSharp.fluid }
                styleClass="banner"
            >
                <Title title="Contact" styleClass="center sigma" />
            </Background>
            <div className="container">
                <div>
                    <h4>Get In Touch</h4>
                    <p>
                        I'm baby master cleanse lyft leggings, gluten-free mixtape authentic 
                        90's snackwave slow-carb hell of four loko. Bitters asymmetrical keffiyeh 
                        vape.
                    </p>
                    <div className="line"></div>
                    <address className="info-data">
                        <ul>
                            <li>438 Marine Parade</li>
                            <li>Goderich</li>
                            <li>Ontario</li>
                        </ul>
                        <div className="line"></div>
                        <ul>
                            <li>519-955-1010</li>
                            <li>780-346-3355</li>
                            <li>contact@email.com</li>
                        </ul>
                    </address>
                </div>
                <Contact />
            </div>
        </Wrapper>
    </Layout>
)

export const query = graphql`
  {
    img1: file(relativePath: {eq: "about-1.jpg"}) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Wrapper = styled.div`
    margin-top: 6rem;
    margin-bottom: 14rem;

    .container {
        margin-top: 10rem;
        ${setGrid({gap: '6rem', min: '40rem'})}
    }

    h4 {
      margin-bottom: 3rem;
      text-transform: uppercase;
    }
`

export default PostsPage
