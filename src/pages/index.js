import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Portfolio from '../components/Portfolio'
import InfoSwitcher from '../components/InfoSwitcher'
import Image from "gatsby-image"
import SEO from '../components/SEO'
import styled from 'styled-components'
import { 
  setSectionBg, 
  setColor,
  setBreakpoint,
  setGrid} from '../styles'
import Team from '../components/Team'
import Title from '../components/Title'

const IndexPage = ({data}) => {
  const {portfolio: {nodes:portfolio}} = data

  return (
    <Layout>
      <SEO 
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, suscipit?"
        title="Home"
      />
      <Hero />

      <Wrapper>
        <section className="section-bg delta-2 p-y">
          <div className="container">
            <div className="max-width-1 mx-center">
              <Title title="Creating Vibrant Spaces & Communites" styleClass="center sigma" />
              <p className="mar-top">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. </p>
            </div>
          </div>
        </section>

        <section className="container p-y">
          <div className="max-width-2 mx-center">
            <Title title="A PLACE TO CALL HOME" styleClass="center" />
            <p className="mar-top">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. </p>
          </div>
        </section>

        <section className="section-bg pi">
          <div className="container p-y">
            <InfoSwitcher />
          </div>
        </section>
        
        <section className="section-bg">
          <Portfolio portfolio={portfolio} />
        </section>

        <div className="container p-y">
          <div className="max-width-2 mx-center">
            <Title title="Meet Our Team" styleClass="center" />
            <p className="mar-top">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. </p>
          </div>
        </div>

        <section className="section-bg pi p-y">
          <div className="container">
            <Team />
          </div>
        </section>

        <section className="section-bg delta-2 p-y">
          <div className="container">
            <div className="max-width-2 mx-center">
              <Title title="Creating Vibrant Spaces & Communites" styleClass="center sigma" />
              <p className="mar-top max-width-1 mx-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. </p>
            </div>
          </div>
        </section>

        <section className="section-bg">
          <div className="contact">
            <Image fluid={ data.img2.childImageSharp.fluid } />
            <div className="content">
              <div>
                <Title title="A PLACE TO CALL HOME" styleClass="center" />
                <p  className="mar-top">At vero eos et accusamus et iusto odio dignissimos ducimus<br /> qui blanditiispraesentium voluptatum. </p>
                <div className="line"></div>
                <ul>
                    <li>438 Marine Parade</li>
                    <li>Elwood, Victoria </li>
                    <li>P.O Box 3184 </li>
                </ul>
                <ul>
                    <li>E: hello@foundry.net</li>
                    <li>P: +614 3948 2726</li>
                </ul>
              </div>
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
    img2: file(relativePath: {eq: "about-1.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    portfolio: allMdx(limit: 3, sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {type: {in: "portfolio"}}}) {
      nodes {
        id
        frontmatter {
          title
          category
          slug
          image {
            childImageSharp {
              fluid(quality: 100, maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const Wrapper = styled.article`
    .section-bg {
        ${ setSectionBg('grey') }
    }

    .mar-top {
      margin-top: 3rem;
    }

    .section {
        padding: 10rem 0;
    }

    .description {
      margin-bottom: 10rem;
    }
    
    .contact {
      @media screen and ( min-width: ${ setBreakpoint.small } ) {
        ${setGrid()}
      }
        
      .content {
        display: flex;
        justify-content: center;
        margin: 3rem 2rem;
        align-items: center;
      }
    }
    
    .section-bg {
        background-color: ${ setColor.sigma };
        width: 100%;
    }

    .delta-2 {
        background-color: ${ setColor.delta_2 };
        color: ${ setColor.sigma };
    }

    .tau {
        background-color: ${ setColor.tau };
    }
    
    .pi {
        background-color: ${ setColor.pi };
    }
`

export default IndexPage
