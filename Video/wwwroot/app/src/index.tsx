import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

if (window.personsUrl) {
  ReactDOM.render(<App />, document.getElementById('app'));
}
