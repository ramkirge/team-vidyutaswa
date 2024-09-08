
import './App.css';
import Nav from './components/Nav';

import Baja from './components/Baja';
import Team from './components/Team';



import Hero from './components/Hero';
//import { Component } from 'react';

function App() {
  return (
    <div className='App'>
      <Nav />
  
      <Hero />
      <Baja />
      <Team />
    </div>
  );
}

export default App;
