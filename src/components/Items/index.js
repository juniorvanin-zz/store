import React from 'react';

import { Item } from '../../components/Item';

import './styles.css';

const Items = () => (
    <ul className="l-items-container">
      <li className="l-items-container__item">
        <Item />
      </li>
      <li className="l-items-container__item">
        <Item />
      </li>
      <li className="l-items-container__item">
        <Item />
      </li>
      <li className="l-items-container__item">
        <Item />
      </li>
      <li className="l-items-container__item">
        <Item />
      </li>
      <li className="l-items-container__item">
        <Item />
      </li>
      <li className="l-items-container__item">
        <Item />
      </li>
      <li className="l-items-container__item">
        <Item />
      </li>
    </ul>
  );

  export { Items };