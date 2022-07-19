import React from 'react';

export default function SearchContainer() {
  return (
    <div className="search">
      <ul className="search-tab">
        <li className="search-tab__item">Nhà đất bán</li>
        <li className="search-tab__item">Nhà đất cho thuê</li>
      </ul>
      <div className="search-content">
        <div className="search-categories">
          <div className="search-group"></div>
        </div>
        <div className="search-filter"></div>
      </div>
    </div>
  );
}
