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
    grid-template-columns: repeat( auto-fit, minmax( 40rem, 1fr ));
    grid-template-areas: "a b"
                         "a c";
    & > div:first-child {
      grid-area: a;
    }
    & > div:nth-child(2) {
      grid-area: b;
    }
    & > div:nth-child(3) {
      grid-area: c;
    }
  }
`

export default index;