import React from 'react'
import styled from 'styled-components'

const Service = ({fact}) => (
    <Wrapper>
        <h2>{fact.title}</h2> 
        <p>{fact.text}</p> 
    </Wrapper>
)

const Wrapper = styled.div`
    h2 {
        margin-bottom: 3rem;
    }

    p:last-child {
        margin-bottom: 0;
    }

    .as-icon {
        font-size: 3rem;
    }
`

export default Service;