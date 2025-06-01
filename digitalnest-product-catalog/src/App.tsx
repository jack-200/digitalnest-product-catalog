import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    document.title = 'DigitalNest Product Catalog';
  }, []);

  return (
    <>
      <header>
        <h1>DigitalNest Product Catalog</h1>
      </header>
      <div>Homepage</div>
    </>
  );
}

export default App;
