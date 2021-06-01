import React from 'react'
import styled from 'styled-components'
// import { useTranslation } from 'react-i18next'
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

  // const { t } = useTranslation()

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
      <div className="page-title">盲盒</div>
      <div className="page-desc">盲盒是我们结合知名IP的NFT作品的一个很好的玩法! </div>
      <Products className="grid-container">
        {products.map((v, i) => {
          return <Product key={'pic' + i} src={v.pic} alt="" />
        })}
      </Products>
      <div className="page-title"></div>
      <Con className="page-desc">
盲盒是一种特别好玩的玩法，我们将会拿一些我们独家授权的IP制作成nft产品，期待我们推出的第一个盲盒产品吧！
      </Con>

      <div style={{marginBottom: '200px', marginTop: '50px'}} className="page-title2">Coming Soon!!</div>
    </PageWrapper>
  )
}
