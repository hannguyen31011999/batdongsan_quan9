import React, { Fragment, useState, useRef, useEffect } from 'react';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';
import { useClickOutSide } from 'hooks/useClickOutSide';

export default function HeaderClient() {
  const menuRef = useRef();
  const toggleRef = useRef();
  const [isShowMenuMobile, setShowMenuMobile] = useState(false);
  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (!menuRef?.current.contains(e.target) && !toggleRef?.current.contains(e.target))
        setShowMenuMobile(false);
    });
    return () => {
      window.removeEventListener('click', (e) => {});
    };
  }, []);
  return (
    <Fragment>
      <HeaderDesktop handleActionMenu={() => setShowMenuMobile(true)} toggleRef={toggleRef} />
      <HeaderMobile isShowMenu={isShowMenuMobile} menuRef={menuRef} />
    </Fragment>
  );
}
