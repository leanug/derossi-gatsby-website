import React from 'react'
import styled from 'styled-components'
import { setColor, setRadius } from '../../styles/'

const Service = () => (
    <Wrapper>
        <h3>John Doe</h3> 
        <p>Cloud bread live-edge direct trade deep v yr gentrify. Bitters williamsburg air plant</p> 
        <p>Cloud bread live-edge direct trade deep v yr gentrify. Bitters williamsburg air plant</p>  
    </Wrapper>
)

const Wrapper = styled.div`
    h3 {
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