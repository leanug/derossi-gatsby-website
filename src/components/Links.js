import React from 'react';
import links from '../constants/links'
import { Link } from 'gatsby'
import { setColor, setGridGap } from "../styles"
import styled from 'styled-components'

const Links = ({styleClass}) => {
    return (
        <Wrapper className={`${styleClass ? styleClass : ""}`}>
            {links.map( link => {
                const { url, title, id } = link
                return(
                    <Link activeClassName="active" key={ id } to={ url }>{ title }</Link>
                )
            })}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    ${ setGridGap.beta };
    grid-template-columns: repeat(auto-fill, 1fr);
    text-transform: uppercase;

    &.navbar-links {
        grid-auto-flow: column;
        justify-content: right;
    }

    &.sidebar-links {
        grid-auto-flow: row;
        justify-content: left;
    }

    a {
        font-size: 1.3rem;
        opacity: 0.6;
        transition: all 0.2s ease-out;
    }

    a:hover {
        opacity: 1;
    }

    .active {
        opacity: 1;
    }
`

export default Links;