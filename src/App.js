
import './App.css';

// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react' ;

import Home from './components/Home'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Home/>
      </div>
    
      <footer className = "Footer">
        <Footer/>
      </footer>
     
    </div>
  );
}

export default App;
