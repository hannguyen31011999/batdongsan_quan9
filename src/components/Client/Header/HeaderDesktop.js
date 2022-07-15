import React from 'react';
import Logo from 'styles/assets/img/header-logo.svg';
import PropTypes from 'prop-types';

export default function HeaderDesktop({ handleActionMenu, toggleRef }) {
  return (
    <div className="header-container">
      <div className="header-center">
        <div className="header-center__logo">
          <a href="">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="header-center__menu">
          <button className="header-center__toggle" onClick={handleActionMenu} ref={toggleRef}>
            <i className="lni lni-menu"></i>
          </button>
        </div>
      </div>
      <div className="header-left">
        <div className="header-logo">
          <a href="">
            <img src={Logo} alt="" />
          </a>
        </div>
        <ul className="header-left__menu">
          <li className="header-left__item">
            <a href="">Nhà đất bán</a>
          </li>
          <li className="header-left__item">
            <a href="">Nhà đất cho thuê</a>
          </li>
          <li className="header-left__item">
            <a href="">Dự án</a>
          </li>
          <li className="header-left__item">
            <a href="">Tin tức</a>
          </li>
          <li className="header-left__item active-tags">
            <a href="">Wiki BĐS</a>
            <div className="header-left__tags">
              <span>Mới</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="header-right">
        <ul className="header-right__menu">
          <li className="header-right__item">
            <a href="">Đăng nhập</a>
          </li>
          <li className="header-right__item">
            <a href="">Đăng ký</a>
          </li>
          <li className="header-right__item">
            <a href="">Đăng tin</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

HeaderDesktop.propTypes = {
  handleActionMenu: PropTypes.func,
  toggleRef: PropTypes.any,
};
