import React,{ useEffect } from 'react';
import styled from 'styled-components';
import { DISTANCE } from '../../constants/style';
import { GoalBox, Title, CarouselBox } from '../../components/general';
import { useDispatch } from 'react-redux';
import { Products } from '../../components/productSystem';
import { MEDIA_QUERY } from '../../constants/style';
import useProduct from '../../hooks/productHooks/useProduct';
// import Snowfall from 'react-snowfall';
import {
  setProducts,
  setErrorMessage,
} from '../../redux/slices/productSlice/productSlice';
import { Navbar } from '../../components';
import { useTranslation } from 'react-i18next'
import ConTitle from '../../components/Content/Title';
import ConSubTitle from '../../components/Content/SubTitle';


const Page = styled.div`
  height: fit-content;
  position: relative;
  width: 100%;
`;

const Section = styled.div`
  width: 100%;
  margin-top: 0;
  padding: 20px 0;
  height: auto;
  background-color: #f9f9f9;
`;

const  TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  padding: 20px;
`;

const HomePageProducts = styled.div`
  margin: 0px 0;
  width: 100%;
`;

const BtnSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;

  :hover {
    text-decoration: none;
    color: inherit;
  }

  :focus {
    outline: none;
    text-decoration: none;
    color: inherit;
  }

  :active {
    text-decoration: none;
    color: inherit;
  }
`

const JoinUs = styled.span`
  width: 157px;
  height: 31px;
  color: #474747;
  border: 1px solid #474747;
  text-align: center;
  line-height: 40px;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover{
    background: #7f7f7f;
    color: #ffffff;
  }
`
const Banner = styled.div`
  position: relative;
  width: 100%;
`

const BannerText = styled.div`
  position: absolute;
  top: 28%;
  width: 100%;
  text-align: center;
`

const BannerText1 = styled.div`
  font-family: SourceHanSansCN-Heavy;
  font-size: 88px;
  color: #01EED0;
  letter-spacing: 1.82px;
`

const BannerText2 = styled.div`
  font-family: SourceHanSansCN-Normal;
  font-size: 32px;
  color: #ffffff;
  letter-spacing: 0.66px;;
`

const HomePage = () => {
  const dispatch = useDispatch();
  const {
    products,
    productErrorMessage,
    handleGetProducts,
    handleGetProductsMoreButton,
  } = useProduct();

  const {t} = useTranslation();

  useEffect(() => {
    window.scroll(0, 0);
    handleGetProducts(1);
    return () => {
      dispatch(setProducts([]));
      dispatch(setErrorMessage(null));
    };
  }, [dispatch]);

  return (
    <Page>
      {/* <Banner>
        <img width="100%" src={process.env.PUBLIC_URL + "/NFT_MarketPlace/bg_pictures.png"} />
        <BannerText>
          <BannerText1>Marketplace</BannerText1>
          <BannerText2>A market made for NFT where everything is special</BannerText2>
        </BannerText>
      </Banner> */}
      <Navbar />
      <Section>
        {/* <Title $isLarge>{t('NEW POST')}</Title> */}
        <HomePageProducts>
          <Products
            products={products}
            handler={handleGetProductsMoreButton}
            productErrorMessage={productErrorMessage}
          />
        </HomePageProducts>
      </Section>
      {/* <GoalBox /> */}
    </Page>
  );
};

export default HomePage;
