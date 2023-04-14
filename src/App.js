import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './modules/AppRouter/AppRouter';
import Navbar from './modules/Navbar/Navbar';
import { AuthContextProvider } from './firebase/authContext';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
