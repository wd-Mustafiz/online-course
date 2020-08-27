import React from 'react';

import './App.css';
import Header from './Component/Header/Header';
import Banner from './Component/Banner/Banner';
import Title from './Component/Title/Title';
import Main from './Component/Main/Main';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Title></Title>
      <Main></Main>
    </div>
  );
}

export default App;
