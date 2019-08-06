import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import RowView from "./row-view";

it('renders without crashing without values', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RowView title="Title"/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing with values', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RowView title="Title" values={[0, 0]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays the title', () => {
  const component = shallow(
      <RowView title='Amazing title'/>
  );
  expect(component.contains('Amazing title')).toBe(true);
});

it('displays the values', () => {
  const component = shallow(
      <RowView title='Amazing title' values={[30, 111]}/>
  );
  expect(component.contains(30)).toBe(true);
  expect(component.contains(111)).toBe(true);
});
