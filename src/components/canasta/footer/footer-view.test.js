import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import FooterView from "./footer-view";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FooterView title="Title" values={[0, 0]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays the title', () => {
  const component = shallow(
      <FooterView title='Amazing title' values={[
        30,
        111
      ]}/>
  );
  expect(component.contains('Amazing title')).toBe(true);
});

it('displays the values', () => {
  const component = shallow(
      <FooterView title='Amazing title' values={[
        30,
        111
      ]}/>
  );
  expect(component.contains(30)).toBe(true);
  expect(component.contains(111)).toBe(true);
});
