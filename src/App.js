import React from 'react';
import './App.css';
import Bar_nav from './components/bar-nav';
import Head from './components/head';
import Cuerpo_principal from './components/cuerpo_principal';
import Footer from './components/footer';
import Barra_lateral from './components/barra_lateral';
import Props from './components/props';

function App() {
  return (
    <div className='todo'>
      <Barra_lateral />

      <div className='main'>
        <Head />
        <Bar_nav />
        <Props />
        <Cuerpo_principal />
        <Footer />


      </div>

    </div>
  );
}

export default App;
