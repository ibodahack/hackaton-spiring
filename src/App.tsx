<<<<<<< Updated upstream
import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
=======
import GlobalStyles from './style/global';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
>>>>>>> Stashed changes
import AppRouter from './Router/AppRouter';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      <GlobalStyles />
    </div>
  )
};

export default App;
