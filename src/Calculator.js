function calculateNextStep(array) {
  let input = array.map(row => row.slice());
  let output = input.map(row => row.slice());
  for (let i = 0; i < input.length; i++){
    for (let j = 0; j < input.length; j++){
      output[i][j] = isAlive(input, i, j)
    }
  }
  return output
}

function isAlive(inputArray, rowNumber, colNumber){
  let array = inputArray.map(row => row.slice())
  let count = 0;
  for (let upDown = -1; upDown <= 1; upDown++){
    if (rowNumber + upDown < 0 || rowNumber + upDown >= array.length) { continue; }
    for (let leftRight = -1; leftRight <= 1; leftRight++) {
      if (colNumber + leftRight < 0 || (upDown === 0 && leftRight === 0) || colNumber + leftRight >= array[0].length) {continue;}
      if (array[rowNumber + upDown][colNumber + leftRight]) {
       count++
      }
    }
  }
  if(array[rowNumber][colNumber]){
    if (count < 2){
      return false
    } else {
      return true
    }
  } else {
    return false
  }
}
module.exports = calculateNextStep;