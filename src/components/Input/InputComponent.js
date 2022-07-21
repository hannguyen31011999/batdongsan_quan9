import { useClickOutSide } from 'hooks/useClickOutSide';
import React, { Fragment, useEffect, useState, memo } from 'react';
import { useRef } from 'react';
import { listPlaceholder } from 'settings/constants/ListPlaceholder';

function InputComponent() {
  // const [character, setCharacter] = useState('');
  // const [indexCharacter, setIndexCharacter] = useState(0);
  // const [placeholder, setPlaceHolder] = useState({
  //   index: 0,
  //   str: listPlaceholder[0],
  // });
  // const [isFocusInput, setFocusInput] = useState(false);
  const inputRef = useRef();
  // const clickOutside = useClickOutSide(inputRef, () => {
  //   setFocusInput(false);
  //   setPlaceHolder({
  //     index: 0,
  //     str: listPlaceholder[0],
  //   });
  // });
  // useEffect(() => {
  //   if (isFocusInput) {
  //     setCharacter('');
  //     setIndexCharacter(0);
  //   } else {
  //     if (placeholder.index !== listPlaceholder.length) {
  //       if (placeholder.str?.length !== indexCharacter) {
  //         setTimeout(() => {
  //           setIndexCharacter(indexCharacter + 1);
  //           setCharacter(character + placeholder?.str[indexCharacter]);
  //         }, 150);
  //       } else {
  //         setTimeout(() => {
  //           setCharacter('');
  //           setIndexCharacter(0);
  //           setPlaceHolder({
  //             index: placeholder.index + 1,
  //             str: listPlaceholder[placeholder.index],
  //           });
  //         }, 300);
  //       }
  //     } else {
  //       setCharacter('Tìm nhanh. VD: Vinhomes Central Park');
  //     }
  //   }
  // }, [character, indexCharacter, placeholder, isFocusInput]);
  return (
    <Fragment>
      <input
        type="text"
        className="search-input"
        placeholder={`Tìm nhanh. VD: Vinhomes Central Park`}
        onFocus={() => {
          if (!isFocusInput) setFocusInput(true);
        }}
        ref={inputRef}
      />
    </Fragment>
  );
}

export default memo(InputComponent);
