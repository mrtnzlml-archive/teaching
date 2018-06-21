import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('updates the counter correctly', () => {
  const wrapper = shallow(<App />);
  const buttons = wrapper.find('button');

  const IncreaseButton = buttons.filterWhere(
    component => component.text() === 'Increase'
  );
  const DecreaseButton = buttons.filterWhere(
    component => component.text() === 'Decrease'
  );

  expect(wrapper.find('h1').text()).toBe('0');
  IncreaseButton.simulate('click');
  expect(wrapper.find('h1').text()).toBe('1');
  DecreaseButton.simulate('click');
  DecreaseButton.simulate('click');
  DecreaseButton.simulate('click');
  expect(wrapper.find('h1').text()).toBe('-2');
});
