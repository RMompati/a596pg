import { render, screen } from '@testing-library/react';
import {App} from './App';
import {MemoryRouter} from "react-router-dom";

test('Checks for page content', () => {
  render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
  );
  const h1 = screen.getByText(/My Website/);
  expect(h1).toHaveTextContent("My Website");
});
