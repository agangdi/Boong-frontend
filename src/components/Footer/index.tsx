import React from 'react'
import styled from 'styled-components'
import Nav from './components/Nav'
import NavSocial from './components/NavSocial'
import { MEDIA_QUERY } from '../../constants/style'


const Footer: React.FC = () => {

  return (
    <StyledFooter>
      <StyledFooterInner>
        <StyledFooterItemLeft style={{ marginBottom: 20, textAlign: 'left' }}>
          <div className="blank-title">BOONG</div> 
          <StyledFooterItemTitle>© 2020-2021 BOONG</StyledFooterItemTitle>
          <a className="style-linked" target="_blank" href={'mailto:support@BOONG.art'}>support@BOONG.art</a>
        </StyledFooterItemLeft>
        <StyledFooterItem>
          <Nav />
          <NavSocial />
        </StyledFooterItem>
      </StyledFooterInner>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  width: 100%;
  background: linear-gradient(225deg, #A1E1F1 0%, #ECB500 100%);;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding-bottom: 40px;
  `} 
`
const StyledFooterInner = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding: 47px 15px 54px;
  box-sizing: border-box;
  ${MEDIA_QUERY.sm} {
    width: 98%;
  }
`

const StyledFooterItemLeft = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 10px 0;
  ${MEDIA_QUERY.sm} {
    display: none;
  }
`
const StyledFooterItem = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 10px 0;
`

const StyledFooterItemTitle = styled.span`
  font-weight: 500;
  color: #FFFFFF;
  min-width: 100px;
  margin-top: 22px;
  ont-family: SourceHanSansCN-Normal;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 1.73px;
  line-height: 28px;
`
// const StyledLink = styled.a`
//   color: ${({ theme }) => theme.bg2};
//   text-decoration: none;
//   font-size: 10px;
//   font-weight: 
//   font-weight: 500;
//   @media (max-width: 540px) {
//     padding-right: 16px;
//   }
// `

export default Footer
