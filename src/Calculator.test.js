const calculateNextStep = require('./Calculator');
convertToBools = function(array){
  return array.map(row => row.map(cell => (cell === 'X')))
};

test('center cell with fewer than 2 live neighbors dies', () => {
  let array = [
    '. . .'.split(' '),
    '. X X'.split(' '),
    '. . .'.split(' ')
  ];
  array = convertToBools(array);
  let nextStep = calculateNextStep(array);
  expect(nextStep[1][1]).toBe(false)
});

test('corner cell with fewer than 2 live neighbors dies', () => {
  let array = [
    'X . .'.split(' '),
    'X . .'.split(' '),
    '. . .'.split(' ')
  ];
  array = convertToBools(array);
  let nextStep = calculateNextStep(array);
  expect(nextStep[0][0]).toBe(false)
});

test('center cell stays alive if it has 2 neighbours', () => {
  let array = [
    '. . .'.split(' '),
    'X X X'.split(' '),
    '. . .'.split(' ')
  ];
  array = convertToBools(array);
  let nextStep = calculateNextStep(array);
  expect(nextStep[1][1]).toBe(true)
});

test('corner cell stays alive if it has 2 neighbours', () => {
  let array = [
    'X . .'.split(' '),
    'X X .'.split(' '),
    '. . .'.split(' ')
  ];
  array = convertToBools(array);
  let nextStep = calculateNextStep(array);
  expect(nextStep[0][0]).toBe(true)
});