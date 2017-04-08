import React, { Component } from 'react';

import styles from './home.pcss';

class Home extends Component {
  render() {
    return (
      <main>
        <p className={styles.text}>It feels like home again</p>
      </main>
    );
  }
}

export default Home;
