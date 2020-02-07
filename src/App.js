import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import GlobalStyles from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
