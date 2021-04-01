import React from 'react'
import Work from './Work'
import styled from 'styled-components'
import {setBreakpoint} from '../../styles/'

const index = ({portfolio}) => {
  return (
    <Wrapper>
      {portfolio.map( work => {
        return <Work key={ work.id } { ...work } />
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media screen and ( min-width: ${ setBreakpoint.small } ) {
    display: grid;
    grid-template-areas: "a b"
                         "a c"
                         "d e"
                         "f g"
                         "h i"
                         "j k"
                         "l m";
    & > div:first-child {
      grid-area: a;
    }
    & > div:nth-child(2) {
      grid-area: b;
    }
    & > div:nth-child(3) {
      grid-area: c;
    }
    & > div:nth-child(4) {
      grid-area: d;
    }
    & > div:nth-child(5) {
      grid-area: e;
    }
    & > div:nth-child(6) {
      grid-area: f;
    }
    & > div:nth-child(7) {
      grid-area: g;
    }
    & > div:nth-child(8) {
      grid-area: h;
    }
    & > div:nth-child(9) {
      grid-area: i;
    }
    & > div:nth-child(10) {
      grid-area: j;
    }
    & > div:nth-child(11) {
      grid-area: k;
    }
    & > div:nth-child(12) {
      grid-area: l;
    }
    & > div:nth-child(13) {
      grid-area: m;
    }
  }
`

export default index;