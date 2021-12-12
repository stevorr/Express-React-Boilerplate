import { StrictMode } from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
