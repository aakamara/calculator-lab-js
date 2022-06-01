const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

// --- addition test ---
describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    const expected = 5;
    const actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    
  });

  test('can add two negative numbers', () => {
    
  });

  test('can add zero', () => {
    
  });

});

// --- subtraction test ---
describe('subtract', () => {

  test('can subtract two small numbers', () => {
    const expected = 5;
    const actual = subtract(6, 1);
    expect(actual).toBe(expected);
  });

});

// --- multiply test ---
describe('multiply', () => {
  test('can multiply two small numbers', () => {
    const expected = 10;
    const actual = multiply(5, 2);
    expect(actual).toBe(expected);
  });
});

// --- divide test ---
describe('divide', () => {
  test('can divide two small numbers', () => {
    const expected = 3;
    const actual = divide(6, 2);
    expect(actual).toBe(expected);
  });
});

// --- modulus test ---
describe('modulus', () => {
  test('can modulo two small numbers', () => {
    const expected = 1;
    const actual = modulus(9, 4);
    expect(actual).toBe(expected);
  });
});

// --- even test ---
// describe('even', () => {
//   test('can give boolean to even number', () => {
//     const expected = true;
//     const actual = even(6);
//     expect(actual).toBe(expected);
//   });
// });

// --- odd test ---
describe('odd', () => {

});
