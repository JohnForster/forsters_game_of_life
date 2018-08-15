const calculateNextStep = require('./Calculator')
convertToBools = function(array){
  return array.map(row => row.map(cell => (cell === 'X')))
}

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