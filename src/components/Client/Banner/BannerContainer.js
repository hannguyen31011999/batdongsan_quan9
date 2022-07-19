import React from 'react';
import Slider from 'react-slick';
import BannerItem from './BannerItem';
import SearchContainer from './SearchContainer';
import { listCarousel } from 'settings/constants/ListCarousel';
import { configCarousel } from 'settings/constants/ConfigCarousel';

export default function BannerContainer() {
  return (
    <div className="banner">
      <Slider {...configCarousel}>
        {listCarousel.map((item) => {
          return <BannerItem srcIframe={item.src} key={item.id} />;
        })}
      </Slider>
      <SearchContainer />
    </div>
  );
}
