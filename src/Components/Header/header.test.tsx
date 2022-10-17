import React, { useState } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

test('renders content', () => {
    let displayHeader = false;
    const setDisplayHeader = () => {}
    const handleClick = (setFunc: Function, element:boolean) => {
    }
    render(<Header setDisplayHeader={setDisplayHeader} displayHeader={displayHeader} handleClick={handleClick} />)
    const elementOne = screen.getAllByText(`about me`);
    const elementTwo = screen.getAllByText('my scils');
    const elementFree = screen.getAllByText('contacts');
    const elementFo = screen.getAllByText('start');
    expect(elementOne).toHaveLength(2);
    expect(elementTwo).toHaveLength(2);
    expect(elementFree).toHaveLength(2);
    expect(elementFo).toHaveLength(2);
    
  })