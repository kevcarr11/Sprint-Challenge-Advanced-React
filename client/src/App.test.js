import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';
import DarkModeSwitch from './components/darkModewitch';

afterEach(rtl.cleanup);

test('Render the heading', () => {
  const wrapper = rtl.render(<DarkModeSwitch />);
  const element = wrapper.getByText(/Women's World Cup players ranked by search interest from Google Trends/i);
  expect(element).toBeVisible();
});




