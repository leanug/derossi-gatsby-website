import React, { useState } from "react"
import jobs from '../constants/experience'
import {GiCircle} from "react-icons/gi"
import styled from 'styled-components'
import { 
  setColor, 
  setRadius, 
  setContainer, 
  setTransition} from '../styles/'

function Jobs() {
  const [value, setValue] = useState(0)
  const {duties} = jobs[value]
  
  return (
    <Wrapper>
        <div className="jobs-center">
          {/* Btn container */}
          <div>
            <div className="btn-container">
              { jobs.map((item, index) => {
                return (
                  <button 
                    key={index} 
                    className={`job-btn ${ index === value && 'active-btn' }`}
                    onClick={() => setValue( index )}
                  >
                    {item.company}
                  </button>)
              })}
            </div>
          </div>
         
          {/* Info */}
          <div className="content">
            <div className="job-info">
              {duties.map( item => (
                <div key={item.id} className="job-desc max-width-2">
                  <GiCircle className="job-icon"></GiCircle>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .container {
      ${setContainer.container};
  }

  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 4rem;
  }

  .job-btn {
    background: transparent;
    border-bottom: 1px solid transparent;
    cursor: pointer;
    font-weight: 400;
    line-height: 1;
    margin: 0 1.5rem;
    padding: 2rem;
    text-transform: capitalize;
    ${setTransition};
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .job-btn:hover {
    color: ${setColor.alpha};
    background-color: ${setColor.colorDelta_3};
  }

  .active-btn {
    color: ${ setColor.alpha };
    border-bottom: 1px solid ${setColor.alpha};
  }

  .job-desc {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
    margin-bottom: 1.25rem;
    background-color: ${setColor.colorDelta_2};
    padding: 1.5rem;
    border-radius: ${setRadius.radiusBeta};
  }

  .job-desc p {
    margin-bottom: 0;
  }

  .job-icon {
    color: ${setColor.alpha};
  }
`

export default Jobs
