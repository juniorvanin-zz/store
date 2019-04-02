import React from 'react';

import { Item } from '../../components/Item';

import './styles.css';

const Items = () => (
    <ul className="items-container">
      <li className="items-container__item">
        <Item />
      </li>
      <li className="items-container__item">
        <Item />
      </li>
      <li className="items-container__item">
        <Item />
      </li>
      <li className="items-container__item">
        <Item />
      </li>
      <li className="items-container__item">
        <Item />
      </li>
      <li className="items-container__item">
        <Item />
      </li>
      <li className="items-container__item">
        <Item />
      </li>
      <li className="items-container__item">
        <Item />
      </li>
    </ul>
  );

  export { Items };