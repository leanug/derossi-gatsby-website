import React from 'react';
import styled from 'styled-components'
import {setRadius} from '../../styles/'

const Person = ({ img, name, position, text }) => {
    return (
        <Wrapper>
            <img alt={name} src={ img } className="image" />
            <h4 className="name">{ name }</h4> 
            <p className="small">{ position }</p>
            <p>{ text }</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    text-align: center;

    .name {
        font-size: 1.8rem;
        margin: 1.5rem 0 0.5rem 0;
        text-transform: uppercase;
    }

    p:last-child {
        margin-bottom: 0;
    }

    .image {
        ${setRadius.alpha};
        width: 100%;
    }
`

export default Person;