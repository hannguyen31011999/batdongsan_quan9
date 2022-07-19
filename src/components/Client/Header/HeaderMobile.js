import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import LogoHome from 'styles/assets/img/icon/ic_for_sale.svg';
import HeaderMobileMenu from './HeaderMobileMenu';

export default function HeaderMobile({ isShowMenu, menuRef }) {
  const [isShowSubMenu, setShowSubMenu] = useState(false);
  return (
    <Fragment>
      <div className="header-mobile" style={isShowMenu ? { visibility: 'visible' } : {}}>
        <div
          className="header-mobile__overlay"
          style={isShowMenu ? { transform: 'translateX(0)' } : {}}
        ></div>
        <div
          className="header-mobile__content"
          style={isShowMenu ? { transform: 'translateX(0)' } : {}}
          ref={menuRef}
        >
          <div className="header-mobile__top">
            <div className="header-mobile__action">
              <button className="header-mobile__btn">Đăng nhập</button>
              <button className="header-mobile__btn">Đăng kí</button>
            </div>
            <div className="header-mobile__action">
              <button className="header-mobile__btn header-mobile__action--story">Đăng tin</button>
            </div>
          </div>
          <div className="header-mobile__center">
            <ul className="header-mobile__subMenu">
              <li className="header-mobile__subItem">
                <div className="header-mobile__subItemContent">
                  <div className="header-mobile__iconTitle">
                    <img src={LogoHome} alt="" width={18} height={18} />
                  </div>
                  <div className="header-mobile__text">
                    <span>Nhà đất bán</span>
                  </div>
                  <div
                    className="header-mobile__iconAction"
                    onClick={() => setShowSubMenu(!isShowSubMenu)}
                  >
                    <i
                      className="fa fa-angle-down"
                      style={isShowSubMenu ? { transform: 'rotate(180deg)' } : {}}
                    ></i>
                  </div>
                </div>
                <HeaderMobileMenu />
              </li>
            </ul>
          </div>
          <div className="header-mobile__bot"></div>
        </div>
      </div>
    </Fragment>
  );
}

HeaderMobile.propTypes = {
  isShowMenu: PropTypes.bool,
  menuRef: PropTypes.any,
};
