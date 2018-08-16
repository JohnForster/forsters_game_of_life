import {calculateNextStep} from './Calculator';
function convertToBools(array){
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
    'X . .',
    'X X .',
    '. . .'
  ].map(row => row.split(' '));
  array = convertToBools(array);
  let nextStep = calculateNextStep(array);
  expect(nextStep[0][0]).toBe(true)
});

test('cell stays alive if it has 3 neighbours', () => {
  let array = [
    '. X .',
    'X X X',
    '. . .'
  ].map(row => row.split(' '));
  array = convertToBools(array);
  let nextStep = calculateNextStep(array);
  expect(nextStep[1][1]).toBe(true)
});

test('corner cell stays alive if it has 3 neighbours', () => {
  let array = [
    'X X .',
    'X X .',
    '. . .'
  ].map(row => row.split(' '));
  array = convertToBools(array);
  let nextStep = calculateNextStep(array);
  expect(nextStep[0][0]).toBe(true)
});

test('cell dies alive if it has more than three neighbours', () => {
  let array = [
    'X X .',
    'X X .',
    '. . X'
  ].map(row => row.split(' '));
  array = convertToBools(array);
  let nextStep = calculateNextStep(array);
  expect(nextStep[1][1]).toBe(false)
});

test('cell dies alive if it has more than three neighbours', () => {
  let array = [
    'X X X',
    'X X X',
    'X X X'
  ].map(row => row.split(' '));
  array = convertToBools(array);
  let nextStep = calculateNextStep(array);
  expect(nextStep[0][1]).toBe(false);
  expect(nextStep[1][1]).toBe(false)
});

test('dead cell comes alive if it has exactly three neighbours', () => {
  let array = [
    'X X X',
    '. X .',
    'X . X'
  ].map(row => row.split(' '));
  array = convertToBools(array);
  let nextStep = calculateNextStep(array);
  expect(nextStep[2][1]).toBe(true);
  expect(nextStep[1][0]).toBe(false)
});

test('cell dies if it has no neighbours', () => {
  let array = [
    '. . .',
    '. X .',
    '. . .'
  ].map(row => row.split(' '));
  array = convertToBools(array);
  let nextStep = calculateNextStep(array);
  expect(nextStep[1][1]).toBe(false)
});

