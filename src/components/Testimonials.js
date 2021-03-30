import React, { useState } from 'react';
import people from '../constants/testimonials';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import styled from 'styled-components'
import { setColor, setRadius, setTransition } from '../styles';

const Testimonial = () => {
  const [ index, setIndex ] = useState( 0 )
  const { name, job, image, text } = people[ index ]

  const prevPerson = ()=> {
    setIndex( index => {
      const newIndex = index > 0 ? index - 1 : people.length - 1 
      return newIndex
    })
  }
  
  const nextPerson = ()=> {
    setIndex( index => {
      const newIndex = index + 1 < people.length ? index + 1 : 0 
      return newIndex
    })
  }

  return (
    <Wrapper>
        <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
        </button>
        
        <div>
            <div className='img-container'>
            <img src={image} alt={name} className='person-img' />
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <span className='quote-icon'>
                <FaQuoteRight />
            </span>
        </div>
        
        <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
        </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    padding: 1.5rem 2rem;
    transition: all .2s ease-out;
    text-align: center;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    grid-gap: 1rem;

    main {
        min-height: 100vh;
        display: grid;
        place-items: center;
    }

    .title {
        text-align: center;
        margin-bottom: 4rem;
    }

    .underline {
        height: 0.25rem;
        width: 5rem;
        margin-left: auto;
        margin-right: auto;
    }

    .container {
        width: 80vw;
        max-width: 80vw;
    }

    .img-container {
        position: relative;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin: 0 auto;
        margin-bottom: 1.5rem;
    }

    .person-img {
        width: 100%;
        display: block;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        position: relative;
    }

    .quote-icon {
        border-radius: ${ setRadius.radiusBeta };
        color: ${ setColor.sigma };
        display: grid;
        font-size: 2.5rem;
        margin: auto;
        height: 2.5rem;
        place-items: center;
        transform: translateY(30%);
        width: 2.5rem;
    }

    .img-container::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: -0.25rem;
        right: -0.5rem;
        border-radius: 50%;
    }

    .author {
        margin-bottom: 0.25rem;
    }

    .job {
        margin-bottom: 0.5rem;
        text-transform: uppercase;
        font-size: 0.85rem;
    }

    .info {
        margin-bottom: 0.75rem;
        max-width: 60rem;
        margin: 2rem auto;
    }

    .prev-btn,
    .next-btn {
        align-items: center;
        background: ${ setColor.delta_3 };
        border-color: transparent;
        border-radius: ${ setRadius.radiusBeta };
        color: ${ setColor.sigma };
        cursor: pointer;
        font-size: 1.25rem;
        margin: 0 0.5rem;
        height: 4rem;
        display: flex;
        justify-content: center;
        ${ setTransition() };
        width: 4rem;
    }

    .prev-btn:hover,
    .next-btn:hover {
        background: ${ setColor.delta_2 };
    }
`

export default Testimonial;