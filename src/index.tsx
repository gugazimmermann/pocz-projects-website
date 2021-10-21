import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './scroll-to-top';
import App from './App';
import './index.css';

ReactDOM.render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </StrictMode>,
  document.getElementById('root'),
);
