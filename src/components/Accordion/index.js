import React from 'react';
import Question from './Single'

const Questions = ({ data }) => {
    return (
        <>
          {data.map( question => {
            const {id, title, info } = question
            return (
              <Question key={id} title={title} info={info }/>
            )
          })}
        </> 
    );
};

export default Questions;