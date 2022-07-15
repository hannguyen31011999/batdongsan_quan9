import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function HeaderMobile({ isShowMenu, menuRef }) {
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
          <div className="header-mobile__top"></div>
          <div className="header-mobile__center"></div>
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
