import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MySkils } from './MySkils';

test('renders content', () => {
    render(<MySkils />)
    const elementOne = screen.getAllByText(`HTML`);
    expect(elementOne).toBeDefined();
  })