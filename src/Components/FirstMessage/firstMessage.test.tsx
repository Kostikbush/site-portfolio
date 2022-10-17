import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import FirstMessage from './FirstMessage';

test('renders content', () => {

  
    render(<FirstMessage/>)
  
    const element = screen.getByText(`H`)
    expect(element).toBeDefined()
  })