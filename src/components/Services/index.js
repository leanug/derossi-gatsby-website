import React from 'react'
import styled from 'styled-components'
import Service from './Service'
import Title from "../Title"
import {setBreakpoint} from '../../styles/'

const Services = () => {
    return (
        <Wrapper>
            <div className="services-row">
                <Service />
                <Service />
                <Service />
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