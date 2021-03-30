import React from 'react'
import Contact from '../components/Contact'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import styled from 'styled-components'
import Title from '../components/Title'

const PostsPage = () => {
  return (
    <Layout>
        <SEO 
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, suscipit?"
            title="Contact Omega Architecture"
        />
        <Wrapper>
            <div className="container">
                <Title 
                    title="contact" 
                    text="Lorem ipsum dolor emet quemet"
                />
                <Contact />
            </div>
        </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
    margin-top: 14rem;
    margin-bottom: 14rem;
`

export default PostsPage
