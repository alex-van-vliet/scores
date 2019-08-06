import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import HeaderView from "./header-view";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderView teams={[
    'Team 1',
    'Team 2'
  ]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays the team\'s name', () => {
  const component = shallow(
      <HeaderView teams={[
        'Team 1\'s name is amazing',
        'Test'
      ]}/>
  );
  expect(component.contains('Team 1\'s name is amazing')).toBe(true);
  expect(component.contains('Test')).toBe(true);
});
