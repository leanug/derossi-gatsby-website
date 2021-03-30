import React from 'react'
import { Button } from "./Button"
import { BsGeoAlt, BsPhone } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import styled from 'styled-components'
import { setColor, setRadius } from '../styles/'

const Contact = () => (
    <Wrapper>
        <div className="content">
            <div className="info">
                <div className="box">
                    <p>
                        I'm baby master cleanse lyft leggings, gluten-free mixtape authentic 
                        90's snackwave slow-carb hell of four loko. Bitters asymmetrical keffiyeh 
                        vape.
                    </p>
                    <address className="info-data">
                        <p><BsGeoAlt className="contact-icon" /> 69 Scotchmere Dr / Goderich / Ontario</p>
                        <p><BsPhone className="contact-icon" /> 519-955-1010</p>
                        <p><BsPhone className="contact-icon" /> 780-346-3355</p>
                        <p><FiMail className="contact-icon" /> contact@email.com</p>
                    </address>
                </div>
            </div>
            <div className="box">
                <form>
                    <label htmlFor="contact-name">Name</label>
                    <input type="text" id="contact-name" className="form-control" />
                    <label htmlFor="contact-email">Email</label>
                    <input type="email" id="contact-email" className="form-control" />
                    <label htmlFor="contact-message">Message</label>
                    <textarea name="message" rows="5" id="contact-message" className="form-control"></textarea>
                    <Button type="submit">submit here</Button>
                </form>
            </div>
        </div>
    </Wrapper>
)

const Wrapper = styled.section`
    .content {
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax( 32rem, 1fr ));
        grid-gap: 3rem;

        & > div {
            border-radius: ${ setRadius.radiusBeta };
        }
    }
    
    // Left
    .contact-icon {
        color: ${ setColor.colorDelta_1 };
        font-size: 2.5rem;
        margin-right: 1.8rem;
    }

    .box {
        background-color: ${ setColor.colorPi_5 };
        border-radius: ${ setRadius.radiusBeta };
        padding: 3rem;
    }

    .info-data > p {
        display: flex;
        align-items: center;
    }

    p:not(:last-child) {
        margin-bottom: 3rem;
    }

    input[type=text],
    input[type=email],
    textarea {
        background-color: ${ setColor.Sigma };
        border: none;
        border-radius: ${ setRadius.radiusBeta };
        color: ${ setColor.colorDelta_1 };
        font-size: 1.6rem;
        margin: .5rem 0 2rem 0;
        padding: 1.5rem;
        width: 100%;
    }
`

export default Contact;