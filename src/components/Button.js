import styled from 'styled-components'
import { setColor, setRadius } from '../styles/'

export const Button = styled.button`
    background-color: ${ setColor.colorDelta_1 };
    border: 1px solid ${ setColor.colorDelta_1 };
    border-radius: ${ setRadius.radiusBeta };
    color: ${ setColor.colorSigma };
    font-size: 1.6rem;
    padding: 1.5rem 3rem;
    text-transform: capitalize;
    transition: all 0.2s linear;

    &:hover {
        background-color: ${ setColor.colorDelta_3 };
        color: ${ setColor.colorSigma };
        cursor: pointer;
    }
`