import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import CanastaView from './canasta-view';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CanastaView teams={['Team 1', 'Team 2']} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
