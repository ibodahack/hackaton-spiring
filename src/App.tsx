import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppRouter from './Router/AppRouter';
import GlobalStyles from './style/global';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      <GlobalStyles />
    </div>
  );
};

export default App;
