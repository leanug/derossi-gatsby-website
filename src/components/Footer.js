import React from 'react'
import styled from 'styled-components'
import { 
    setColor, 
    setBreakpoint, 
    setGridGap } from '../styles'

const Footer = () => {
    return (
        <Wrapper>
          <div className="container">
              <div className="cols">
                    <div>
                      <h1>OMEGA</h1>
                      <p>Interior Design Studio</p>
                    </div>
                    <div>
                        <h6>Location</h6>
                        <p> 72 Derry Street <br/>
                            BRENDALE <br/>
                            Queensland <br/>
                            Zip Code: 4500 <br/>
                            Phone Number:
                            (07) 3399 9154
                        </p>
                            <div className="space"></div>
                    </div>
                    <div>
                    <div>
                        <h6>Start a conversation</h6>
                        <p> 
                            <a href="mailto:hi@omegastudio.com">hi@omegastudio.com +1 555 4718 1234</a>
                        </p>
                    </div>
                    </div>
                    <div>
                      <p><a href="/">terms and conditions</a></p>
                      <p><a href="/">privacy policy</a></p>
                      <p></p>
                    </div>
                </div>
            <p>
                &copy; { new Date().getFullYear() } OMEGA Interior Design. All rights reserved
            </p>
          </div>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    align-items: center;
    background-color: ${ setColor.delta_2 };
    color: ${ setColor.sigma };
    padding: 2rem 0;
    width: 100%;

    .container {
        margin: auto;
        max-width: ${ setBreakpoint.xLarge };
        width: 90vw;
    }

    .cols {
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax( 20rem, 1fr ));
        grid-gap: ${ setGridGap.gridGapGamma };
        margin: 4rem 0;

        .space {
            height: 3rem;
            width: 100%;
        }
        
        a {
          color: #f6f6f6;
          font-weight: 500;
          text-decoration: underline;
          transition: all 0.2s linear;
        }

        a:hover {
          color: #333;
        }

        h1 {
            color: ${ setColor.colorSigma };
        }

        h6 {
          color: #f6f6f6;
          margin-bottom: 2.5rem;
        }
    }
`

export default Footer
