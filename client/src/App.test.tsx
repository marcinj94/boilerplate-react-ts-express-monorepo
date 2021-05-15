// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './state';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const linkElement = screen.getByText(/Test redux - click button on the bottom!/i);
  expect(linkElement).toBeInTheDocument();
});
