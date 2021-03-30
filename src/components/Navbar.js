import React from 'react'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'
import Links from './Links'
import styled from 'styled-components'
import { 
  setBreakpoint, 
  setColor,
  setTransition } from '../styles/'

const Navbar = ({ toggleSidebar }) => {
  return (
    <Nav>
        <NavCenter>
            <div className="logo-wrap">
                <Link to="/">Aerion</Link>
            </div>
            <div className="nav-links">
                <Links styleClass="navbar-links" />
            </div>
            <button onClick={ toggleSidebar } className="toggle-btn">
                <FaBars />
            </button>
        </NavCenter>    
    </Nav>
  )
}

const Nav = styled.nav`
    background: ${setColor.delta_1};
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
`

const NavCenter = styled.div`
  align-items: center;
  width: 90vw;
  max-width: 1440px;
  min-height: 6rem;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;

  .logo-wrap {
    display: grid;
    font-size: 1.8rem;
    font-weight: 500;
    grid-auto-flow: column;
    justify-content: start;
    align-items: center;
  }

  a {
    color: ${setColor.sigma};
  }

  img {
    margin-right: 1.5rem;
    max-height: 3rem;
  }

  .nav-links {
    display: none;
  }
  
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    font-size: 2rem;
    margin-left: 3rem;
    ${ setTransition() };
    width: min-content;
  }

  .toggle-btn:hover {
    opacity: 0.6;
  }

  @media screen and (min-width: ${ setBreakpoint.medium }) {
    & {
        display: grid;
        grid-template-columns: repeat( 2, 1fr );
        column-gap: 2rem;
        align-items: center;
    }

    .toggle-btn {
        display: none;
    }
    
    .nav-links {
        justify-content: end;
        display: flex;
    }
  }
`

export default Navbar