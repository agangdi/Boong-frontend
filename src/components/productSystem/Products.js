import React from 'react';
import styled from 'styled-components';
import { COLOR, FONT, DISTANCE,EFFECT, MEDIA_QUERY } from '../../constants/style';
import { MoreButton, ErrorMessage } from '../../components/productSystem/';
import useProduct from '../../hooks/productHooks/useProduct';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectProductCount,
  selectProducts,
} from '../../redux/slices/productSlice/productSlice';
import { TYPE } from '../../theme';

import TalentDiv from '../../components/Card/Talent'

const ProductsContainer = styled.div`
  padding: 0; 
  width: 100%;
  max-width: 997px;
  margin: 0 auto;
`;

const ProductsWrap = styled.div`
  grid-template-columns: repeat(3, 1fr);
`;

const ProductContainer = styled.div`
  width: 100%;
  max-width: 313px;
  font-size: 15px;
  color: #000000;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px; 
`;

const Placeholder = styled.div`
  width: ${(props) => props.$width || '311px'};
  margin: ${(props) => props.$margin || '0 20px'};
`;

const ProductPicture = styled.img`
  position: relative;
  height: 450px;
  width: 100%;
  object-fit: cover;
  transition: opacity 0.2s;
  cursor: pointer;
`;

const ProductName = styled.div`
  width: 95%;
  font-size: 14px;
  text-align: left;
  margin-top: 10px;
  cursor: pointer;
  color: #7f7f7f;
}
`;

const VendorName = styled.div`
  margin-top: 10px;
  width: 95%;
  font-size: 13px;
  color: #7f7f7f;
  text-align: left;
  cursor: pointer;

`;

const ProductPrice = styled.div`
  margin-top: 5px;
  width: 90%;
  text-align: left;
  margin-bottom: 10px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  color: #474747;
  :hover {
    text-decoration: none;
    color: #474747;
  }

  :focus {
    outline: none;
    text-decoration: none;
    color: #474747;
  }

  :active {
    text-decoration: none;
    color: #474747;
  }
`

const Product = ({ product, onLoad, loaded, $width, $height, $margin }) => {
  const formatter = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });

  return (
    <ProductContainer $width={$width} $height={$height} $margin={$margin}>
      {/* <StyledLink to={`/nft/products/${product.id}`}> */}
        <ProductPicture
          src={product.picture_url}
          style={{ opacity: loaded ? 1 : 0 }}
          onLoad={onLoad}
          $width={$width}
          $height={$height}
        />
      {/* </StyledLink> */}
      <ProductName>
        {product.title}
        {(product.number) && (
          ' | ' + product.number
        )}
      </ProductName>
      <VendorName>
        {product.info}
      </VendorName>
      <ProductPrice>
        <TYPE.darkGray fontSize={14}>
          {product.remark}
        </TYPE.darkGray>
      </ProductPrice>
    </ProductContainer>
  );
};

export const Products = ({
  products,
  id,
  handler,
  productErrorMessage,
  $width,
  $height,
  $margin,
  $padding,
  $justify,
}) => {
  const { loaded, onLoad } = useProduct();
  const producCALFrray = useSelector(selectProducts);
  const productCount = useSelector(selectProductCount);
  return (
    <>
      <ProductsContainer $padding={$padding}>
        <ProductsWrap className='grid-container'>
          <>
            {products.map((v, i) => {
              return (
                <TalentDiv 
                  key={'gallery' + i} 
                  title={v.remark}
                  price={v.price}
                  author={v.name}
                  pic={v.picture_url}> 
                </TalentDiv>
                // <Product
                //   key={product.id}
                //   product={product}
                //   onLoad={onLoad}
                //   loaded={loaded}
                //   $width={$width}
                //   $height={$height}
                //   $margin={$margin}
                // />
              );
            })}
          </>
          <Placeholder $width={$width} $margin={$margin} />
          <Placeholder $width={$width} $margin={$margin} />
          <Placeholder $width={$width} $margin={$margin} />
          <Placeholder $width={$width} $margin={$margin} />
        </ProductsWrap>
      </ProductsContainer>

      {productCount - producCALFrray.length <= 0 ? (
        <></>
      ) : (
        <>{handler && <MoreButton id={id} handler={handler} />}</>
      )}

      {productErrorMessage && (
        <ErrorMessage productErrorMessage={productErrorMessage} />
      )}
    </>
  );
};
