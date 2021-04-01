import React from 'react';
import people from '../../constants/people'
import Person from './Person'
import {setGrid} from '../../styles/'
import styled from 'styled-components'

const Team = () => (
    <Wrapper>
        {people.map((person, i) => {
            return (
                <Person
                    key={i}
                    img={ person.img }
                    name={ person.name }
                    position={ person.position }
                    text={ person.text }
                />
            )
        })}
    </Wrapper>
)

const Wrapper = styled.div`
    ${setGrid({gap: '2rem', min: '20rem'})}
`

export default Team;