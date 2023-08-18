import { render, screen } from '@testing-library/react';
import App from './App';

import { Reservations } from './components';

test('Checking Time Status Section', () => {
  render( <Reservations />);

  const statusHeadaing = screen.getByText("Evening");

  expect(statusHeadaing).toBeInTheDocument();
});