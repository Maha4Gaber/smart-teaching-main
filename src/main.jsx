import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';

import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'react-loading-skeleton/dist/skeleton.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-loading-skeleton/dist/skeleton.css'

import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';


const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
  
  <QueryClientProvider client={queryClient}>
  <Provider store={store}>
    <App />
</Provider>




  </QueryClientProvider>

);

