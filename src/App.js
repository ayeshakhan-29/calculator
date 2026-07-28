import React, { useState } from 'react';
import { add, subtract, multiply, divide } from './calculatorLogic';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    try {
      const num1 = parseFloat(input1);
      const num2 = parseFloat(input2);
      let res;
      switch (operation) {
        case 'add':
          res = add(num1, num2);
          break;
        case 'subtract':
          res = subtract(num1, num2);
          break;
        case 'multiply':
          res = multiply(num1, num2);
          break;
        case 'divide':
          res = divide(num1, num2);
          break;
        default:
          throw new Error('Invalid operation');
      }
      setResult(res);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} placeholder="Enter first number" />
      <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)} placeholder="Enter second number" />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>
      <button onClick={handleCalculate}>Calculate</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {result !== null && <div>Result: {result}</div>}
    </div>
  );
}

export default App;
