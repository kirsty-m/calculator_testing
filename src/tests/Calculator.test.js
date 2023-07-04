import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 to 4 and get 5', () => {
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const buttonAdd = container.getByTestId('operator-add');
    fireEvent.click(buttonAdd);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const buttonEqual = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(buttonEqual);
    expect(runningTotal.textContent).toEqual('5');
  })

  
})

