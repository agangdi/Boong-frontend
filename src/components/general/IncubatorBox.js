import React from 'react';
import Carousel from 'nuka-carousel';
import styled from 'styled-components';
import { ExternalLink } from '../../theme';

const preBtnSty = {
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  width: '40px',
  height: '40px',
  borderRadius: '20px',
  display: 'none'
}

const IncubatorBox = () => {
  return (
    <Carousel
      style={{
        width: '100%',
        margin: '0 auto',
        marginTop: '20px'
      }}
      autoplay={false}
      wrapAround={true}
      defaultControlsConfig={{
        nextButtonText: '>',
        prevButtonText: '<',
        pagingDotsStyle: {
          fill: 'white',
          margin: '0 5px',
        },
        prevButtonStyle: preBtnSty,
        nextButtonStyle: preBtnSty,
        pagingDotsStyle: {
          display: 'none'
        }
      }}
    >
    </Carousel>
  );
};

export default IncubatorBox;
