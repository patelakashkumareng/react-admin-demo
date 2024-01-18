import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'

import { RouterProvider } from 'react-router-dom'
import routes from './routes';
import store from './store/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={routes}/>
  </Provider>
  // </React.StrictMode>
);

