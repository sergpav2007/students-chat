import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './modules/AppRouter/AppRouter';
import Navbar from './modules/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
