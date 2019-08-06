import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import CanastaView from './canasta-view';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CanastaView teams={['Team 1', 'Team 2']} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays the team\'s name', () => {
  const component = shallow(
    <CanastaView teams={['Team 1\'s name is amazing', 'Test']} />
  );
  expect(component.contains('Team 1\'s name is amazing')).toBe(true);
  expect(component.contains('Test')).toBe(true);
});
