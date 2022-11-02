import { render, screen, fireEvent } from '@testing-library/react';
import'@testing-library/jest-dom/extend-expect';
import TodoTable from './TodoTable'
import App from './App'

test('renders todotable', () => {
  const row = [
    {desc: 'Do something', date: '24.12.2023'}
  ];
  render(<TodoTable todos={row} />);
  const tablecell = screen.getByText(/do something/i);
  expect(tablecell).toBeInTheDocument();
});

test('add todo',() => {
  render(<App />);
  const desc = screen.getByPlaceholderText('Description');
  fireEvent.change(desc, { target: { value: 'Do something' } });

  const date = screen.getByPlaceholderText('Date');
  fireEvent.change(date, { target: { value: '20.20.2023' } });

  const button = screen.getByText('Add');
  fireEvent.click(button);

  const tablecell = screen.getByText(/do something/i);
  expect(tablecell).toBeInTheDocument();
});

test('clear todo', () => {
  render(<App />);
  const desc = screen.getByPlaceholderText('Description');
  fireEvent.change(desc, { target: { value: 'Do something' } });

  const date = screen.getByPlaceholderText('Date');
  fireEvent.change(date, { target: { value: '20.20.2023' } });

  const button = screen.getByText('Add');
  fireEvent.click(button);

  const clearButton = screen.getByText('Clear Todo')
  fireEvent.click(clearButton);

  const tablecell = screen.queryByText(/do something/i);
  expect(tablecell).not.toBeInTheDocument(); 
});