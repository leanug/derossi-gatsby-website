import React from "react"
import {
  FaTwitter,
  FaFacebook,
  FaBehance,
  FaPinterest,
  FaDribbble,
} from "react-icons/fa"
import styled from "styled-components"

const Wrapper = styled.div`
  line-height: 1;

  ul {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 2rem;
  }

  .social-icons-header {
    justify-content: start;
    font-size: 2rem;
  }

  .social-icons-sidebar {
    justify-content: start;
    font-size: 2rem;
  }

  .social-icons-footer {
    justify-content: start;
    font-size: 2rem;
  }
`

const SocialLinks = ({ styleClass = '.social-icons-header' } = {}) => (
  <Wrapper>
    <ul className={styleClass}>
      <li>
        <a href="https://twitter.com">
          <FaTwitter className="social-icon facebook-icon"></FaTwitter>
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <FaFacebook className="social-icon dribble-icon"></FaFacebook>
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <FaBehance className="social-icon twitter-icon"></FaBehance>
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <FaPinterest className="social-icon twitter-icon"></FaPinterest>
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <FaDribbble className="social-icon twitter-icon"></FaDribbble>
        </a>
      </li>
    </ul>
  </Wrapper>
)

export default SocialLinks
