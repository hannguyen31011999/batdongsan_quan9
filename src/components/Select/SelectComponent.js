import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OptionComponent from './OptionComponent';
import { listCategoriesMenu } from 'settings/constants/ListCategories';

export default function SelectComponent({ classComponent }) {
  const [activeMenu, setActiveMenu] = useState([]);
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
  return (
    <div className={`select-container ${classComponent ? classComponent : ''}`}>
      <div className="select-text">
        <span>Loại nhà đất</span>
        <i className="fa fa-angle-down" />
      </div>
      <div className="select-list">
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
