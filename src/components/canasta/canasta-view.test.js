import React from 'react';
import ReactDOM from 'react-dom';
import CanastaView from './canasta-view';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CanastaView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
