import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import CanastaContainer from './canasta-container';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CanastaContainer teams={['Team 1', 'Team 2']} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
