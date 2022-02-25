import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Main from './components/main/Main';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
