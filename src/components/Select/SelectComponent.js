import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import OptionComponent from './OptionComponent';
import { listCategoriesMenu } from 'settings/constants/ListCategories';

export default function SelectComponent({ classComponent }) {
  const [activeMenu, setActiveMenu] = useState([]);
  const [isShowSelect, setShowSelect] = useState(false);
  const optionRef = useRef();
  const selectRef = useRef();
  const handleSelectOption = (item) => {
    let temp = [...activeMenu];
    const index = temp?.findIndex((val) => val.id === item.id && val.isActive);
    if (index === -1) {
      temp.push({ id: item.id, isActive: true });
      setActiveMenu(temp);
    } else {
      temp[index] = { id: item.id, isActive: false };
      setActiveMenu(temp);
    }
  };
  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (!optionRef?.current.contains(e.target) && !selectRef?.current.contains(e.target)) {
        setShowSelect(false);
      }
    });
  }, []);
  return (
    <div className={`select-container ${classComponent ? classComponent : ''}`}>
      <div className="select-text" onClick={() => setShowSelect(!isShowSelect)} ref={selectRef}>
        <span>Loại nhà đất</span>
        <i className="fa fa-angle-down" />
      </div>
      <div
        className="select-list"
        style={isShowSelect ? { display: 'block' } : { display: 'none' }}
        ref={optionRef}
      >
        <ul className="select-list-option">
          {listCategoriesMenu.map((item) => {
            return (
              <OptionComponent
                key={item.id}
                onSelect={handleSelectOption}
                dataOption={item}
                classActive={
                  activeMenu.findIndex((val) => val.id === item.id && val.isActive) !== -1
                    ? 'active'
                    : ''
                }
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

SelectComponent.propTypes = {
  classComponent: PropTypes.string,
};
