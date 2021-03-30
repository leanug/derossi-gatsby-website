import React from 'react';
import styled from 'styled-components'
import facts from '../../constants/facts'
import Fact from './Fact'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(30rem, 1fr));
    grid-gap: 3rem;
    row-gap: 5rem;
`

const Facts = () => (
    <Wrapper>
        {facts.map( fact => {
            return (
                <Fact 
                    icon={ fact.icon }
                    title={ fact.title }
                    text={ fact.text }
                />
            )
        })}
    </Wrapper>
)

export default Facts;