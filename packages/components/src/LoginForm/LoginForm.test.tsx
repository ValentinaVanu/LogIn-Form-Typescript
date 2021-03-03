import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm } from './LoginForm';

test('render a label', (): void => {
  const wrapper = shallow(<LoginForm />);

  expect(wrapper).toMatchSnapshot();
});
