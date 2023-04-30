/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './App.css';
import Bar_nav from './components/bar-nav';
import Head from './components/head';
import Cuerpo_principal from './components/cuerpo_principal';
import Footer from './components/footer';
import Barra_lateral from './components/barra_lateral';
import Box_metricas from './components/Box_metricas';
import Title from './components/title';

function App() {
  return (
    <div className='todo'>
      <Barra_lateral />

      <div className='main'>
        <Head />
        <Bar_nav />
       <Title />
        <Box_metricas />
        <Cuerpo_principal />
        <Footer />
      </div>

    </div>
  );
}

export default App;
