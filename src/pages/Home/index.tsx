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

const Artists = styled(Con)`
  grid-template-columns: repeat(4, 1fr);
  margin-top: 30px;
  padding-bottom: 30px;
`

const Artist = styled.div`
  width: 100%;
  max-width: 228px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ArtistName = styled.span`
  font-family: SourceHanSansCN-Regular;
  font-size: 18px;
  color: #3e3d3e;
  letter-spacing: 1.5px;
  margin-top: 18px;
`

const Gallery = styled.div`
  background: #F9F9F9;
  padding: 57px 0 40px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Talents = styled(Con)`
  grid-template-columns: repeat(3, 1fr);
  margin-top: 30px;
  padding-bottom: 30px;
`

const TalentDiv = styled.div`
  width: 100%;
  max-width: 313px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  padding: 41px 29px;
`

const Talent = styled.div`
  width: 255px;
  height: 363px;
  font-family: SourceHanSansCN-Heavy;
`

const TalentInner = styled.div`
  width: 90%;
  text-align: left;
  margin:0 auto
`

const TalentTitle = styled(TalentInner)`
  margin-top: 11px;
  font-size: 12px;
  color: #6a6a6a;
  letter-spacing: 1px;
`

const TalentPrice = styled(TalentInner)`
  font-size: 14px;
  color: #F94108;
  letter-spacing: 1.17px;
  line-height: 17px;
  text-align: right;
`

const TalentAuthor = styled(TalentInner)`
  font-size: 12px;
  color: #6a6a6a;
  letter-spacing: 1px;
`

const MoreBtn = styled.span`
  // margin-top: 24px;
`

export default function Home() {

  // const { t } = useTranslation()

  const products = [
    {
      pic: process.env.PUBLIC_URL + '/home/product_pictures01.png'
    },
    {
      pic: process.env.PUBLIC_URL + '/home/product_pictures02.png'
    },
    {
      pic: process.env.PUBLIC_URL + '/home/product_pictures03.png'
    }
  ]

  const artists = [
    {
      pic: process.env.PUBLIC_URL + '/home/profile01.png',
      name: 'ASksjdkg'
    },
    {
      pic: process.env.PUBLIC_URL + '/home/profile02.png',
      name: 'HRISSLEU'
    },
    {
      pic: process.env.PUBLIC_URL + '/home/profile03.png',
      name: 'BLLOJYU'
    },
    {
      pic: process.env.PUBLIC_URL + '/home/profile04.png',
      name: 'DISCOVER'
    },
  ]
  const galleries = [
    {
      pic: process.env.PUBLIC_URL + '/home/HRISS.png',
      title: 'HRISS NFT Collectibles',
      price: '0.5 BNB',
      author: 'HRISS'
    },
    {
      pic: process.env.PUBLIC_URL + '/home/SHARIS.png',
      title: 'SHARIS NFT Collectibles',
      price: '1.8 ETH',
      author: 'SHARIS'
    },
    {
      pic: process.env.PUBLIC_URL + '/home/CHHRE.png',
      title: 'CHHRE NFT Collectibles',
      price: '29 DOT',
      author: 'CHHRE'
    },
    {
      pic: process.env.PUBLIC_URL + '/home/NEON.png',
      title: 'NEON  NFT Collectibles',
      price: '2.5 BNB',
      author: 'NEON '
    },
    {
      pic: process.env.PUBLIC_URL + '/home/CHILD.png',
      title: 'CHILD1 NFT Collectibles',
      price: '5.8 ETH',
      author: 'CHILD1'
    },
    {
      pic: process.env.PUBLIC_URL + '/home/YAYA.png',
      title: 'YAYA NFT Collectibles',
      price: '18 DOT',
      author: 'YAYA'
    }
  ]
  return (
    <PageWrapper>
      <img width="100%" src={process.env.PUBLIC_URL + '/Banner.png'} alt="" /> 
      <div className="page-title">Product Introduction</div>
      <Con className="page-desc">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra .
      </Con>
      <Products className="grid-container">
        {products.map((v, i) => {
          return <Product key={'pic' + i} src={v.pic} alt="" />
        })}
      </Products>
      <div className="page-title">Featured Artists</div>
      <Con style={{textAlign: "center"}} className="page-desc">
      Discover our selection of top talented artists and their exclusive artworks.
      </Con>
      <Artists className="grid-container">
        {artists.map((v, i) => {
          return <Artist key={"art" + i}>
                  <img src={v.pic} alt="" />
                  <ArtistName>{v.name}</ArtistName>
                </Artist>
        })}
      </Artists>
      <Gallery>
        <div className="page-title">Boong Gallery</div>
        <Con style={{textAlign: "center"}} className="page-desc">
          The Home of Talent
        </Con>
        <Talents className="grid-container">
            {galleries.map((v, i) => {
              return <TalentDiv key={'gallery' + i}>
                  <Talent>
                    <div style={{
                      width: "100%", 
                      height: "305px",
                      backgroundPosition: 'center',
                      backgroundSize: '100% 100%',
                      backgroundImage:`url(${v.pic}`}}></div>
                    <TalentTitle>{v.title}</TalentTitle>
                    <TalentPrice>{v.price}</TalentPrice>
                    <TalentAuthor>{v.author}</TalentAuthor>
                  </Talent>
                </TalentDiv>
            })}
        </Talents>
        <MoreBtn className="main-btn">More</MoreBtn>
      </Gallery>
    </PageWrapper>
  )
}
