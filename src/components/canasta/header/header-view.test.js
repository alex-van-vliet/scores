import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import HeaderView from "./header-view";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderView titles={[
    'Team 1',
    'Team 2'
  ]} values={[
      0,
      0
  ]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays the team\'s name', () => {
  const component = shallow(
      <HeaderView titles={[
        'Team 1\'s name is amazing',
        'Test'
      ]} values={[
        0,
        0
      ]}/>
  );
  expect(component.contains('Team 1\'s name is amazing')).toBe(true);
  expect(component.contains('Test')).toBe(true);
});

it('displays the team\'s score', () => {
  const component = shallow(
      <HeaderView titles={[
        'Team 1',
        'Team 2'
      ]} values={[
        30,
        111
      ]}/>
  );
  expect(component.contains(30)).toBe(true);
  expect(component.contains(111)).toBe(true);
});
