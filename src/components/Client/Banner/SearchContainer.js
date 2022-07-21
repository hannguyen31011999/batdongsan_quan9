import React from 'react';
import SelectComponent from 'components/Select/SelectComponent';
import InputComponent from 'components/Input/InputComponent';

export default function SearchContainer() {
  return (
    <div className="search">
      <ul className="search-tab">
        <li className="search-tab__item">Nhà đất bán</li>
        <li className="search-tab__item">Nhà đất cho thuê</li>
      </ul>
      <div className="search-content">
        <div className="search-categories">
          <SelectComponent classComponent="search-select" />
          <InputComponent />
          <button type="submit" className="search-btnSubmit">
            <i className="fa fa-search" /> Tìm kiếm
          </button>
        </div>
        <div className="search-multi"></div>
      </div>
    </div>
  );
}
