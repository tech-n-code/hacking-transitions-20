import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the title', () => {
    render(<Header />);
    const titleElement = screen.getByText('Hacking Transitions');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the Galvanize logo', () => {
    render(<Header />);
    const logoElement = screen.getByAltText('Galvanize Logo');
    expect(logoElement).toBeInTheDocument();
  });

  it('renders the greeting with the username', () => {
    render(<Header username="John" />);
    const greetingElement = screen.getByText('Hello, John');
    expect(greetingElement).toBeInTheDocument();
  });
});