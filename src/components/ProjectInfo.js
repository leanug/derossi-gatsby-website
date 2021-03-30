import React from 'react';
import styled from 'styled-components'

const ProjectInfo = ({ text = '', info1 = '', info2 = '', info3 = '', info4 = '' } = {}) => {
    return (
        <Wrapper>
            <div>{ text }</div>
            <div className="data">
                <div>
                    <p>Status</p>
                    {info1}
                </div>
                <div>
                    <p>Client</p>
                    {info2}
                </div>
                <div>
                    <p>Date</p>
                    {info3}
                </div>
                <div>
                    <p>Location</p>
                    {info4}
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax( 32rem, 1fr));
    grid-gap: 8rem;
    margin: 8rem 0;

    .data {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
    }

    p {
        font-weight: 700;
    }
`

export default ProjectInfo;