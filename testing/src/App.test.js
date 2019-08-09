import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react';

import App from './App';
import Display from './component/Display'
import Dashboard from './component/Dashboard'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});



it('render the count of balls and straks', () => {
  
})

