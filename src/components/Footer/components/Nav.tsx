import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink target="_blank" href={'mailto:support@BOONG.art'}>
        Contact US
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-right: 20px;
  flex-wrap: wrap;
`

const StyledLink = styled.a`
  color: ${({ theme }) => theme.bg2};
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  line-height: 34px;
  font-family: SourceHanSansCN-Heavy;
  font-size: 24px;
  color: #FFFFFF;
  letter-spacing: 0.5px;
  margin-left: 16px;
`
export default Nav
