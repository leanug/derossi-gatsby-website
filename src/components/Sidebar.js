import React from 'react'
import Links from './Links'
import { IoMdClose } from 'react-icons/io'
import styled from 'styled-components'
import { setColor } from '../styles/'
import SocialLinks from '../constants/socialLinks'

const Sidebar = ({ isOpen, toggleSidebar }) => (
    <Wrapper 
        className={ `${ isOpen ? 'sidebar showSidebar' : 'sidebar' }` }
        aria-label="Main sidebar containing navigation links and some information"
        aria-hidden={ `${ ! isOpen }` }
    >
      <div className="btn-container">
          <button onClick={ toggleSidebar } className="close-btn">
            <IoMdClose />
          </button>
      </div>
      <div className="sidebar-content">
          <Links styleClass={`${isOpen ? 'sidebar-links' : ''}`} />
      </div>
      <div className="links-container">
          <SocialLinks styleClass="social-icons-sidebar" />
      </div>
      <footer>
          <div>© 2021 Erica Legrand. All rights reserved</div> 
      </footer>
    </Wrapper>
)

const Wrapper = styled.aside`
    &.sidebar {
      background-color: ${ setColor.sigma };
      display: grid;
      grid-auto-flow: row;
      grid-template-rows: auto auto auto 1fr;
      height: 100vh;
      left: 0;
      min-width: 30rem;
      overflow-x: hidden;
      padding: 3rem 3rem;
      position: fixed;
      transition: all 0.2s ease-out;
      transform: translateX(-100%);
      top: 0;
      z-index: 999;

      a {
        color: ${ setColor.delta_1 };
        font-size: 1.7rem;
      }

      .btn-container {
        display: flex;
        justify-content: flex-end;
      }

      .close-btn {
        background-color: transparent;
        border: none;
        color: ${ setColor.delta_1 };
        cursor: pointer;
        font-size: 3rem;
      }

      .sidebar-content {
        margin: 2rem 0;
        width: 100%;
      }

      .links-container {
        padding-top: 2rem;
      }

      footer {
        align-items: flex-end;
        color: black;
        display: flex;
        font-size: 1.2rem;
        width: 100%;
      }

      &.showSidebar {
        transition: all 0.2s ease-out;
        transform: translateX(0);
      }
    }
`

export default Sidebar