import React from 'react'
import styled from 'styled-components'
import { 
    setColor, 
    setRadius, 
    setTransition } from '../styles/'

const Contact = () => (
    <Wrapper>
        <form>
            <input 
                type="text" 
                name="name"
                className="form-control"
                placeholder="Name"
            />
            <input 
                type="email" 
                name="name"
                className="form-control"
                placeholder="Email"
            />
            <textarea 
                name="message" 
                rows="5" 
                className="form-control"
                placeholder="Message"
            >
            </textarea>
            <button type="submit" value="Send">send message</button>
        </form>
    </Wrapper>
)

const Wrapper = styled.section`
   .info-data > p {
        display: flex;
    }

    p:not(:last-child) {
        margin-bottom: 3rem;
    }

    input[type=text],
    input[type=email],
    textarea {
        background-color: ${ setColor.pi };
        border: none;
        color: ${ setColor.delta_2 };
        font-size: 1.6rem;
        margin: .5rem 0 2rem 0;
        padding: 1.5rem;
        width: 100%;
    }

    button {
        background-color: ${setColor.gamma};
        color: ${setColor.sigma};
        cursor: pointer;
        text-transform: uppercase;
        width: 100%;
        ${setTransition()};
    }
`

export default Contact;