import React from 'react'
import styled from 'styled-components'

import twitterIcon from '../../../assets/images/twitter_icon.png';
import facetimeIcon from '../../../assets/images/icon-facebook.png';
import githubIcon from '../../../assets/images/github.png';
import telegramIcon from '../../../assets/images/telegram.png';
import mediumIcon from '../../../assets/images/medium.png';
import redditIcon from '../../../assets/images/reddit-circle.png';

const NavSocial: React.FC = () => {
  return (
    <StyledNav>

      <StyledLink target="_blank" href="https://twitter.com/boong_org?s=09">
        <img src={twitterIcon}  width="31" height="31" />
      </StyledLink>
      <StyledLink target="_blank" href="https://facetime.com/">
        <img src={facetimeIcon}  width="31" height="31" />
      </StyledLink>
      <StyledLink target="_blank" href="">
        <img src={githubIcon}  width="31" height="31" />
      </StyledLink>
      <StyledLink target="_blank" href="https://t.me/boongnft">
        <img src={telegramIcon}  width="31" height="31" />
      </StyledLink>
      <StyledLink target="_blank" href="https://medium.com/@boong_org">
        <img src={mediumIcon}  width="31" height="31" />
      </StyledLink>
      <StyledLink target="_blank" href="">
        <img src={redditIcon}  width="31" height="31" />
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: flex-end;;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 16px;
`

const StyledLink = styled.a`
  color: ${({ theme }) => theme.bg2};
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;
  margin-left: 16px;
`

export default NavSocial
