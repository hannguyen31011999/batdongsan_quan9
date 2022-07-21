import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function OptionComponent({ onSelect, dataOption, classActive }) {
  return (
    <Fragment>
      <li className="select-option" onClick={(e) => onSelect(dataOption)}>
        <div className="select-option__content">
          <span className="select-option__text">Tất cả nhà đất</span>
          <div className={`select-option__icon ${classActive ? classActive : ''}`}></div>
        </div>
      </li>
    </Fragment>
  );
}

OptionComponent.propTypes = {
  onSelect: PropTypes.func,
  dataOption: PropTypes.object,
  classActive: PropTypes.string,
};
