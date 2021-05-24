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
  grid-template-columns: repeat(3, 1fr);
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
      <div className="page-title">Blind Box</div>
      <div className="page-subtitle">A market made for NFT where everything is special</div>
      <Products className="grid-container">
        {products.map((v, i) => {
          return <Product key={'pic' + i} src={v.pic} alt="" />
        })}
      </Products>
      <Con className="page-desc">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra .
      </Con>

      <div style={{marginBottom: '200px', marginTop: '50px'}} className="page-title2">Coming Soon!!</div>
    </PageWrapper>
  )
}
