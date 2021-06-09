import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { MEDIA_QUERY } from '../../constants/style';


const PageWrapper = styled.div`
  width: 100%;
  ${MEDIA_QUERY.md} { 
    display: flex;
    flex-direction: column;
    align-item: center;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Con = styled.div`
  width: 100%;
  max-width: 997px;
`

const Products = styled(Con)`
  margin-top: 30px;
`

const Product = styled.img`
  width: 100%;
  max-width: 313px;
  max-height: 445px;
`
export default function Home() {

  const { t } = useTranslation()

  const products = [
    {
      pic: process.env.PUBLIC_URL + '/blindbox/pictures1.png'
    },
    {
      pic: process.env.PUBLIC_URL + '/blindbox/pictures2.png'
    },
    {
      pic: process.env.PUBLIC_URL + '/blindbox/pictures2.png'
    }
  ]

  return (
    <PageWrapper>
      <div className="page-title">{t("Blind box")}</div>
      <div className="page-desc">{t("Blind box is a particularly fun way to play")} </div>
      <Products className="grid-container">
        {products.map((v, i) => {
          return <Product key={'pic' + i} src={v.pic} alt="" />
        })}
      </Products>
      <div className="page-title"></div>
      <Con className="page-desc">
        {t("we will take some of our exclusive licensed IPs to make NFT products, please look forward to the launch of our first blind box product")}
      </Con>

      <div style={{marginBottom: '200px', marginTop: '50px'}} className="page-title2">Coming Soon!!</div>
    </PageWrapper>
  )
}
