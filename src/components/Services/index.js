import React from 'react'
import styled from 'styled-components'
import Service from './Service'

const Services = ({facts}) => {
    return (
        <Wrapper>
            <div className="services-row">
                {facts.map((fact, i) => {
                    return (
                        <Service key={i} fact={fact} />
                    )
                })}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .services-row {
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(30rem, 1fr));
        grid-gap: 3rem;
    }
`

export default Services;