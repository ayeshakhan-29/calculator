export function add(a, b) {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    throw new Error('Invalid input');
  }
  return a + b;
}

export function subtract(a, b) {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    throw new Error('Invalid input');
  }
  return a - b;
}

export function multiply(a, b) {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    throw new Error('Invalid input');
  }
  return a * b;
}

export function divide(a, b) {
  if (!isValidNumber(a) || !isValidNumber(b)) {
    throw new Error('Invalid input');
  }
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function isValidNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}
