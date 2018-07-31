import React from 'react';
import renderer from 'react-test-renderer';
import LoginForm from '../src/js/components/LoginForm';

jest.unmock('jquery');
jest.unmock('icheck');
window.$ = window.jQuery = require('jquery');
require('icheck');

test('LoginForm renders correctly', () => {
  const tree = renderer.create(
    <LoginForm />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
