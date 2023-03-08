import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import App from './app/App';
import { title } from './app/constants/title';
import './index.css';


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App title={title}/>
    </Provider>
  </React.StrictMode>
);
