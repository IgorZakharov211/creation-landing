import React from 'react';
import './App.scss';
import Header from '../header/Header';
import Content from '../content/Content';
import Footer from '../footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
