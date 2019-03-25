import React, { Component } from 'react';
import { Items } from '../../components/Items';

import './styles.css';

class Home extends Component {
  render() {
    return (
      <div className="main-content">
        <Items />
      </div>
    );
  }
};

export default Home;
