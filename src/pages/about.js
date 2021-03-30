import React from 'react';
import Accordion from '../components/Accordion'
import Background from '../components/Background'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import faq from '../constants/questions'
import { graphql } from 'gatsby'
import Image from "gatsby-image"
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import SEO from "../components/SEO"
import styled from 'styled-components'
import { setBreakpoint, setGrid } from '../styles/'
import Team from '../components/Team'
import Title from '../components/Title'


export const query = graphql`
  {
    img1: file(relativePath: {eq: "about-4.jpg"}) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 6000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: {eq: "about-1.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const about = ({ data }) => {
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
            <Services />
          </div>

          <section className="container section-padding">
              <Title 
                  title="Meet the team" 
                  text="Cloud bread live-edge direct trade deep"
                  left
              />
          </section>

          <section className="section-bg pi">
            <div className="container p-y">
              <Testimonials />
            </div>
          </section>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.article`
    margin-top: 6rem;

   .columns-2 {
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: repeat( auto-fit, minmax( 30rem, 1fr ) );
    margin-bottom: 4rem;
    
    h2 {
      margin: 3rem 0 2.5rem 0;
    }
  }

  .principle {
    @media screen and ( min-width: ${ setBreakpoint.small } ) {
      ${setGrid()}
    }
  }

  @media screen and ( max-width: ${ setBreakpoint.medium } ) {
    .order-1 { 
      order: 1; 
    }

    .order-2 { 
      order: 2;
    }   
  }

  .content {
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax( 32rem, 1fr ));
    grid-gap: 3rem;
  }
`

export default about;