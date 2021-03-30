import React from 'react';
import people from '../../constants/people'
import Person from './Person'
import { setGridGap, setRadius } from '../../styles/'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(32rem, 1fr));
    ${setGridGap.alpha};
`

const Team = () => (
    <Wrapper>
        {people.map( person => {
            return (
                <Person 
                    img={ person.img }
                    name={ person.name }
                    position={ person.position }
                    text={ person.text }
                />
            )
        })}
    </Wrapper>
)

export default Team;