import React from 'react';

import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/Sections/About/About';
import CardContainer from './components/Sections/CardContainer/CardContainer';

function App() {
  return (
    <>
      <Header />
      <main className="site-content">
        <About />
        <CardContainer />
      </main>
      <Footer />
    </>
  );
}

export default App;
