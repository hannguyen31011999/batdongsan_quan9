import ButtonCarousel from 'components/Button/ButtonCarousel';

export const configCarousel = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: (
    <ButtonCarousel classNameButton={'slider-arrow-next'}>
      <i className="fa fa-angle-right"></i>
    </ButtonCarousel>
  ),
  prevArrow: (
    <ButtonCarousel classNameButton={'slider-arrow-prev'}>
      <i className="fa fa-angle-left"></i>
    </ButtonCarousel>
  ),
  customPaging: (i) => <button></button>,
};
