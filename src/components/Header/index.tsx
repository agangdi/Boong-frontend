import { ChainId, TokenAmount } from '@teaswap/uniswap-sdk'
import React, { useState } from 'react'
import { Text } from 'rebass'
import { NavLink } from 'react-router-dom'
// import { darken } from 'polished'
import { useTranslation } from 'react-i18next'

import styled from 'styled-components'

import { useActiveWeb3React } from '../../hooks'
import { useETHBalances, useAggregateUniBalance } from '../../state/wallet/hooks'
import { CardNoise } from '../earn/styled'
import { CountUp } from 'use-count-up'
import { TYPE } from '../../theme'
// import {  useToggleModal } from '../../state/application/hooks'
// import { ApplicationModal } from '../../state/application/actions'

// import Settings from '../Settings'
// import Menu from '../Menu'

import Row, { RowFixed } from '../Row'
import Web3Status from '../Web3Status'
import ClaimModal from '../claim/ClaimModal'
import { useToggleSelfClaimModal, useShowClaimPopup } from '../../state/application/hooks'
import { useUserHasAvailableClaim } from '../../state/claim/hooks'
import { useUserHasSubmittedClaim } from '../../state/transactions/hooks'
import { Dots } from '../swap/styleds'
import Modal from '../Modal'
import UniBalanceContent from './UniBalanceContent'
import usePrevious from '../../hooks/usePrevious'
import I18nSwitch from '../I18nSwitch'
import { MEDIA_QUERY } from '../../constants/style'
// import { ButtonSecondary } from '../Button'

const HeaderFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  top: 0;
  position: relative;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 18px;
  padding-bottom: 18px;
  background-color: #fff;
  z-index: 2;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    grid-template-columns: 1fr;
    padding: 0 1rem;
    width: calc(100%);
    position: relative;
  `};

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding: 0.5rem 1rem;
  `}

  @media screen and (max-width: 1320px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: row;
    justify-content: space-between;
    justify-self: center;
    width: 100%;
    max-width: 960px;
    padding: 1rem;
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    z-index: 99;
    height: 72px;
    border-radius: 0px 0px 0 0;
    background-color: ${({ theme }) => theme.bg1};
  `};
`

const HeaderElement = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: row-reverse;
    align-items: center;
  `};
`

const HeaderElementWrap = styled.div`
  display: flex;
  align-items: center;
`

const HeaderRow = styled(RowFixed)`
  ${({ theme }) => theme.mediaWidth.upToMedium`
    width: 100%;
    display: block;
  `};

  @media screen and (max-width: 1120px) {
    flex-direction: column;
    align-items: flex-start;
  }
  ${MEDIA_QUERY.sm} {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

const HeaderLinks = styled(Row)`
  justify-content: center;
  flex-wrap: wrap;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 6px 0;
    justify-content: flex-start;
`};
 ${MEDIA_QUERY.sm} {
   margin-left: 10px !important;
 }
`

const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0px;
  white-space: nowrap;
  width: 100%;
  cursor: pointer;

  color: ${({ theme }) => theme.gray}
  :focus {
    border: 1px solid blue;
  }
  /* :hover {
    background-color: ${({ theme, active }) => (!active ? theme.bg2 : theme.bg4)};
  } */
`

const UNIAmount = styled(AccountElement)`
  color: black;
  padding: 4px 8px;
  height: 36px;
  font-weight: 500;
`

const UNIWrapper = styled.span`
  width: fit-content;
  position: relative;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  :active {
    opacity: 0.9;
  }
`

const HideSmall = styled.span`
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: none;
  `};
`

const NetworkCard = styled.span`
  white-space: nowrap;
  border-radius: 0px;
  padding: 8px 12px;
  color: ${({ theme }) => theme.gray}
  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin: 0;
    margin-right: 0.5rem;
    width: initial;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-shrink: 1;
  `};
`

const BalanceText = styled(Text)`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
`
const activeClassName = 'ACTIVE'

const StyledNavLink = styled(NavLink).attrs({
  activeClassName
})`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: left;
  border-radius: 0px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.gray};
  width: fit-content;
  margin: 0 6px;
  font-weight: 500;

  &.${activeClassName} {
    border-radius: 0px;
    font-weight: bold;
    color: ${({ theme }) => theme.darkGray};
  }

  :hover,
  :focus
  {
    color:  ${({ theme }) => theme.darkGray};
  }

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    margin: 0;
  `}

  @media screen and (max-width: 1120px) {
    margin: 0 24px 0 0;
    font-size: 14px;
  }
  ${MEDIA_QUERY.sm} {
    margin: 0 10px 0 0;
  }
`
// const Web3StatusGeneric = styled(ButtonSecondary)`
//   ${({ theme }) => theme.flexRowNoWrap}
//   width: 100%;
//   align-items: center;
//   padding: 0.285rem 0.3rem;
//   border-radius: 0px;
//   cursor: pointer;
//   user-select: none;
//   font-size: 14px;
//   margin-top: 1px;
//   :focus {
//     outline: none;
//   }
// `

// // const Web3StatusConnected = styled(Web3StatusGeneric)`
//   background-color: #ffffff;
//   border: 1px solid ${({ theme }) => theme.lightGray};
//   color: ${({ theme }) => theme.gray};
//   font-weight: 500;
//   :hover,
//   :focus {
//     border: 1px solid ${({ theme }) => theme.darkGray};
//   }
//   height: 35px;
//   margin-left: 8px;
// `

const HeaderRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 30px;
`


const NETWORK_LABELS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: 'ETH Mainnet',
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.G??RLI]: 'G??rli',
  [ChainId.KOVAN]: 'Kovan',
  [ChainId.BSC_MAINNET]: 'BSC Mainnet',
  [ChainId.BSC_TESTNET]: 'BSC Testnet'
}

export default function Header() {
  const { account, chainId } = useActiveWeb3React()
  const { t } = useTranslation()

  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']

  const toggleClaimModal = useToggleSelfClaimModal()

  const availableClaim: boolean = useUserHasAvailableClaim(account)

  const { claimTxn } = useUserHasSubmittedClaim(account ?? undefined)

  const aggregateBalance: TokenAmount | undefined = useAggregateUniBalance()

  const [showUniBalanceModal, setShowUniBalanceModal] = useState(false)
  const showClaimPopup = useShowClaimPopup()

  const countUpValue = aggregateBalance?.toFixed(0) ?? '0'
  const countUpValuePrevious = usePrevious(countUpValue) ?? '0'
  // const openClaimModal = useToggleModal(ApplicationModal.ADDRESS_CLAIM)

  return (
    <HeaderRoot>
      <HeaderFrame>
        <ClaimModal />
        <Modal isOpen={showUniBalanceModal} onDismiss={() => setShowUniBalanceModal(false)}>
          <UniBalanceContent setShowUniBalanceModal={setShowUniBalanceModal} />
        </Modal>
        <HeaderRow>
          {/* <div className="gradient-text">BOONG</div> */}
          <img src={process.env.PUBLIC_URL + '/logo.png'} width="80" />
          <HeaderLinks style={{ fontSize: '14px', marginLeft: '39px' }}>
            <StyledNavLink id={`swap-nav-link`} to={'/home'}>
              {t('Home')}
            </StyledNavLink>
            <StyledNavLink id={`NFT-nav-link`} to={'/nft'} >
              {t('NFT')}
              {/* <span>???</span> */}
            </StyledNavLink>
            <StyledNavLink id={`Incubator-nav-link`} to={'/iro'}>
              {t('IRO')}
            </StyledNavLink>
            <StyledNavLink id={`Earn-nav-link`} to={'/stake'}>
              {t('Farm')}
            </StyledNavLink>
            <StyledNavLink to="/blindbox">
              {t('BlindBox')}
            </StyledNavLink>
            <StyledNavLink to="/mint">
              {t('Mint')}
            </StyledNavLink>
          </HeaderLinks>
        </HeaderRow>
        <HeaderControls style={{fontSize: '14px'}}>
          <HeaderElement>
            <HideSmall>
              {chainId && NETWORK_LABELS[chainId] && (
                <NetworkCard title={NETWORK_LABELS[chainId]} color="#0bafb6" >{NETWORK_LABELS[chainId]}</NetworkCard>
              )}
            </HideSmall>
            {availableClaim && !showClaimPopup && (
              <UNIWrapper onClick={toggleClaimModal}>
                <UNIAmount active={!!account && !availableClaim} style={{ pointerEvents: 'auto' }}>
                  <TYPE.gray padding="0 2px">
                    {claimTxn && !claimTxn?.receipt ? <Dots>{t('claiming')} AirDrop</Dots> : `${t('claim')} AirDrop`}
                  </TYPE.gray>
                </UNIAmount>
                <CardNoise />
              </UNIWrapper>
            )}
            {!availableClaim && aggregateBalance && (
              <UNIWrapper onClick={() => {
                setShowUniBalanceModal(true)
              }}>
                <UNIAmount active={!!account && !availableClaim} style={{ pointerEvents: 'auto',color:'#7f7f7f' }}>
                  {account && (
                    <HideSmall>
                      <TYPE.gray
                        style={{
                          paddingRight: '.4rem'
                        }}
                      >
                        <CountUp
                          key={countUpValue}
                          isCounting
                          start={parseFloat(countUpValuePrevious)}
                          end={parseFloat(countUpValue)}
                          thousandsSeparator={','}
                          duration={1}
                        />
                      </TYPE.gray>
                    </HideSmall>
                  )}
                  BC
                </UNIAmount>
                <CardNoise />
              </UNIWrapper>
            )}
            <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}>
              {chainId && account && userEthBalance ? (
                <BalanceText style={{ flexShrink: 0, color:"#7f7f7f"}} pl="0.75rem" pr="0.5rem" fontWeight={500}  >
                  {userEthBalance?.toSignificant(4)} {NETWORK_LABELS[chainId]!=="ETH Mainnet"?"BNB":"ETH"}
                </BalanceText>
              ) : null}
              <Web3Status />
            </AccountElement>
          </HeaderElement>
          <HeaderElementWrap>
            {/* <Menu /> */}
            {/* <Web3StatusConnected onClick={openClaimModal}>
              AirDrop
            </Web3StatusConnected>
            <Settings /> */}
            <I18nSwitch />
          </HeaderElementWrap>
        </HeaderControls>
      </HeaderFrame>
    </HeaderRoot>
  )
}
