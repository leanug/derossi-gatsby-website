import React from 'react';
import Background from '../components/Background'
import Services from '../components/Services'
import facts from '../constants/facts'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import SEO from "../components/SEO"
import styled from 'styled-components'
import {setBreakpoint, setGrid} from '../styles/'
import Title from '../components/Title'

const about = ({data}) => {
    return (
      <Layout>
        <SEO 
          description="About web dev"
          title="About"
        />

        <Wrapper>
          <Background styleClass="banner">
            <div className="container center">
              <Title title="About Us" styleClass="center sigma" />
            </div>
          </Background>

          <div className="container p-y">
            <Services facts={facts} />
          </div>

          <div className="line"></div>

          <div className="container p-y">
          <div className="columns">
              <div>
                <h4>MISSION</h4>
              </div>
              <div>
                <p className="h3 max-width-2">Strive for the perfect balance between form and function.</p>
                <p className="h3 max-width-2">Constructive collegiality is key to the stimulation of ideas.Strive for the perfect balance between form and function.</p>
              </div>
            </div>
              </div>

          <div className="line"></div>

          <section className="container p-y">
            <div className="columns">
              <div>
                <h4>PRINCIPLES</h4>
              </div>
              <div className="principles">
                <div>Strive for the perfect balance between form and function.</div>
                <div>Communicate with clarity, be complex but never complicated.</div>
                <div>Constructive collegiality is key to the stimulation of ideas.</div>
                <div>Question standard norms before choosing to obey them.</div>
                <div>Embrace the difficult decision that drive creativity forward.</div>
                <div>Trust in collaboration the hallmark of our work.</div>
              </div>
            </div>
          </section>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  {
    img1: file(relativePath: {eq: "about-4.jpg"}) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Wrapper = styled.article`
  margin-top: 6rem;

  @media screen and ( min-width: ${ setBreakpoint.small } ) {
    .columns {
      display: grid;
      grid-gap: 4rem;
      grid-template-columns: 1fr 3fr;
    }
  
    .principles {
        ${setGrid()}
    }
  }

  p:last-child {
    margin-bottom: 0;
  }

  h4 {
    margin-top: 5px;
    margin-bottom: 3rem;
  }
`

export default about;