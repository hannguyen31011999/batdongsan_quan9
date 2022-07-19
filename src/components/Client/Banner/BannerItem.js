import React from 'react';
import PropTypes from 'prop-types';

export default function BannerItem({ srcIframe }) {
  return (
    <div className="banner-slider__item">
      <iframe src={srcIframe} title="W3Schools Free Online Web Tutorials"></iframe>
    </div>
  );
}

BannerItem.propTypes = {
  srcIframe: PropTypes.string,
};
