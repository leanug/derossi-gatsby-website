import React from "react"
import styled from 'styled-components'
import { setColor } from "../styles"

const Title = ({ title, text, styleClass }) => {
  return (
    <Wrapper className={styleClass || 'left'}>
      <h2>{ title || 'default title' }</h2>
      { text && <p>{ text }</p> }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h2 {
    color: ${setColor.alpha};
    letter-spacing: 4px;
    margin: 0;
    text-transform: uppercase;
  }

  & > p {
    text-transform: uppercase;
    font-size: 1.4rem;
  }

  .left {
    text-align: left;
  }

  .center {
    text-align: center;
  }

  &.sigma > h2 {
    color: ${setColor.sigma};
  }
`

export default Title