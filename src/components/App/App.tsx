import React from 'react';
import styles from './App.module.scss';
import Spinner from '../Spinner';



function App() {
  return (
    <div className={styles.app}>
      <Spinner />
    </div>
  );
}

export default App;
