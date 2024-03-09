import { render, screen, fireEvent, configure } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Reserve a table/i);
  expect(linkElement).toBeInTheDocument();

  const reserveButton = screen.getByRole("reserve");
  fireEvent.click(reserveButton);

  const dateElement = screen.getByText(/Choose date/i);
  expect(dateElement).toBeInTheDocument();

  const dateInput = screen.getByLabelText(/Choose date/i);
  const today = new Date();
  fireEvent.change(dateInput, { target: { value: today.getDate() } });

  configure({ asyncUtilTimeout: 3000 });

  fireEvent.click(screen.getByTestId('select'), { target: { value: "11:00" } });
  let options = screen.getAllByTestId('select-option');
  expect(options[0].selected).toBeFalsy();
  expect(options[1].selected).toBeTruthy();
  expect(options[2].selected).toBeFalsy();

});
