import React, { Fragment, useEffect, useRef, useState } from 'react';
import { IconSeach } from './HeaderIcon';
import { DivAction } from './HeaderSearch/Action';
import { SearchGroup } from './HeaderSearch/Group';
import { InputSearch } from './HeaderSearch/Input';
import { LinkAction } from './HeaderSearch/Link';
import { SearchComponent } from './HeaderSearch/Search';

export default function HeaderSearch() {
  const [isShowAction, setShowAction] = useState(false);
  const inputRef = useRef();
  useEffect(() => {
    window.addEventListener('click', function (e) {
      if (!inputRef.current.contains(e.target)) {
        setShowAction(false);
      }
    });
  }, []);
  return (
    <Fragment>
      <SearchComponent>
        <SearchGroup>
          {!isShowAction && <IconSeach className="lni lni-search-alt" />}
          <InputSearch placeholder="Tìm kiếm" onFocus={() => setShowAction(true)} ref={inputRef} />
          <DivAction isShow={isShowAction}>
            <LinkAction href="">x</LinkAction>
          </DivAction>
        </SearchGroup>
      </SearchComponent>
    </Fragment>
  );
}
