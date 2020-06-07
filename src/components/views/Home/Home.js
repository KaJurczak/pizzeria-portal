import React from 'react';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.component}>
      <h2 className={styles.title}>
        Home view
      </h2>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
};

export default Home;
