import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { setColor } from '../../styles'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-radius: 2px;
  margin-bottom: 1rem;

  .header {
    align-items: center;
    background-color: ${ setColor.colorPi_5 };
    border: none;
    cursor: pointer;
    display: flex;
    line-height: 1;
    padding: 2rem;
    width: 100%;

    span {
      margin-right: 1.5rem;
    }
  }

  p {
    padding: 2rem;
  }
`

const Question = ({title, info }) => {
  const [showInfo, setShowInfo ] = useState( false )

  return (
    <Wrapper>
      <button className="header" onKeyDown={()=> setShowInfo( ! showInfo )} onClick={()=> setShowInfo( ! showInfo )}>
        <span>
          { showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </span>
        <h5>{title}</h5>
      </button>
      { showInfo && <p>{info}</p> }
    </Wrapper>
  )
};

export default Question;
