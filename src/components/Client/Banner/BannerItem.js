import React from 'react';
import PropTypes from 'prop-types';

export default function BannerItem({ srcIframe }) {
  return (
    <div className="banner-slider__item">
      <img src={srcIframe} alt="" height={767} width={'100%'} />
    </div>
  );
}

BannerItem.propTypes = {
  srcIframe: PropTypes.string,
};
