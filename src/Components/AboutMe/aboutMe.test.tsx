import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { AboutMe } from './AboutMe';

test('renders content', () => {
    render(<AboutMe />)
    const elementOne = screen.getAllByText(`Books I've read:`);
    expect(elementOne).toBeDefined();
  })