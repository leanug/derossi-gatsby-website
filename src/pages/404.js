import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import SEO from "../components/SEO"

const Wrapper = styled.section`
    margin: 14rem 0;  
    text-align: center;

    div {
        margin-top:3rem;
    }
`

const NotFoundPage = () => (
    <Layout>
        <SEO 
          description="404 - Page not found"
          title="404 Page not found"
        />
        <Wrapper>
            <div className="container">
                <h1>404</h1>
                <h3>Sorry, the page you tried cannot be found</h3>
                <div>
                    <Link to="/" className="btn">back home</Link>
                </div>
            </div>
        </Wrapper>
    </Layout>
)

export default NotFoundPage
