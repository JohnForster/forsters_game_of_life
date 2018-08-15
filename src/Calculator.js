function calculateNextStep(array) {
  let input = array.slice();
  let output = input.slice();
  console.log(input);
  for (let i = 0; i < input.length; i++){
    for (let j = 0; j < input.length; j++){
      output[i][j] = isAlive(input, i, j)
    }
  }
  console.log(output);
  return output
}

function isAlive(array, i, j){
  let count = 0;
  for (let a = -1; a <= 1; a++){
    if (i + a < 0 || i + a >= array.length) { break; }
    for (let b = -1; b <= 1; b++) {
       if (j + b < 0 || (a === 0 && b === 0) || j + b >= array[0].length) { break; }
       if (array[i + a][j + b]){ count++ }
    }
  }
  return !(count < 2);
}
module.exports = calculateNextStep;