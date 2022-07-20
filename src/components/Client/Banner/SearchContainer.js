import React from 'react';
import SelectComponent from 'components/Select/SelectComponent';

export default function SearchContainer() {
  return (
    <div className="search">
      <ul className="search-tab">
        <li className="search-tab__item">Nhà đất bán</li>
        <li className="search-tab__item">Nhà đất cho thuê</li>
      </ul>
      <div className="search-content">
        <div className="search-categories">
          <SelectComponent />
        </div>
        <div className="search-multi"></div>
      </div>
    </div>
  );
}
