import React, { useState } from 'react';
import { add, subtract, multiply, divide } from './calculatorLogic';
import './index.css';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<number | string>('');

  const handleButtonClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      const [num1, operator, num2] = input.split(' ');
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);

      if (isNaN(number1) || isNaN(number2)) {
        throw new Error('Invalid input');
      }

      let res;
      switch (operator) {
        case '+':
          res = add(number1, number2);
          break;
        case '-':
          res = subtract(number1, number2);
          break;
        case '*':
          res = multiply(number1, number2);
          break;
        case '/':
          res = divide(number1, number2);
          break;
        default:
          throw new Error('Invalid operation');
      }
      setResult(res);
    } catch (error) {
      setResult(error.message);
    }
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={handleClear}>C</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
      </div>
    </div>
  );
};

export default App;
