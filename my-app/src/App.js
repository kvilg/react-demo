
import './App.css';

import React from 'react';

import './Header/Header.js'
import './Content/Content.js'
import './Footer/Footer.js'

import Header from './Header/Header.js';
import Content from './Content/Content.js';
import Footer from './Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
