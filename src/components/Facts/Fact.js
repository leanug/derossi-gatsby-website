import React from 'react';
import styled from 'styled-components'
import { setRadius } from '../../styles/'

const Wrapper = styled.div`
    border-radius: ${ setRadius.radius };
    display: flex;
    align-items: flex-start;

    h4 {
        margin-bottom: 1rem;
    }

    p:last-child {
        margin-bottom: 0;
    }

    .icon {
        font-size: 4rem;
        margin-right: 2.5rem;
        line-height: normal;
    }
`

const Fact = ({ icon, title, text }) => {
    return (
        <Wrapper>
            <span className="icon">{ icon }</span>
            <div>
            <h4>{ title }</h4>
            <p>{ text }</p>
            </div>
        </Wrapper>
    );
};

export default Fact;