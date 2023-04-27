import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <AppRouter></AppRouter>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
