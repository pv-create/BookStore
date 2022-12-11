import React from 'react';
import { render, screen } from '@testing-library/react';
import App from "./App";
import LoginForm from "./Pages/LoginPage/LoginForm";


test('renders learn react link', () => {
  render(<App/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



test('renders loginusername', () => {
  render(<LoginForm/>);
  const linkElement = screen.getByText(/Username/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders login password', () => {
  render(<LoginForm/>);
  const linkElement = screen.getByText(/Password/i);
  expect(linkElement).toBeInTheDocument();
});


test('render button on Login Form', ()=>{
  render(<LoginForm/>);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
})
