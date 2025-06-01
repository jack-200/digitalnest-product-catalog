import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "DigitalNest Shop";
  }, []);

  return (
    <>
      <header className="main-header-box">
        <h1>DigitalNest Shop</h1>
      </header>
      <div>Homepage</div>
    </>
  );
}

export default App;
