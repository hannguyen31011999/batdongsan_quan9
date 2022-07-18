import { Fragment, useEffect, useRef, useState } from 'react';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

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
  useEffect(() => {
    window.addEventListener('resize', (e) => {
      if (e.target.screen.width > 1199) setShowMenuMobile(false);
    });
    return () => {
      window.removeEventListener('resize', (e) => {});
    };
  }, []);
  return (
    <Fragment>
      <HeaderDesktop handleActionMenu={() => setShowMenuMobile(true)} toggleRef={toggleRef} />
      <HeaderMobile isShowMenu={isShowMenuMobile} menuRef={menuRef} />
    </Fragment>
  );
}
