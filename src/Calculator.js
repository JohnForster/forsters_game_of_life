module.exports = {
  calculateNextStep: function(array){
    let input = array.map(row => row.slice());
    let output = input.map(row => row.slice());
    for (let rowNumber = 0; rowNumber < input.length; rowNumber++){
      for (let columnNumber = 0; columnNumber < input[0].length; columnNumber++){
        output[rowNumber][columnNumber] = isAlive(input, rowNumber, columnNumber)
      }
    }
    return output
  }
};

function isAlive(inputArray, rowIndex, columnIndex){
  let count = countNeighbours(inputArray, rowIndex, columnIndex);
  return applyRules(inputArray[rowIndex][columnIndex], count)
}

function countNeighbours(inputArray, rowIndex, columnIndex) {
  let array = inputArray.map(row => row.slice());
  let count = 0;

  for (let verticalChange of [-1, 0, 1]) {
    if (rowIndex + verticalChange < 0 || rowIndex + verticalChange >= array.length) {
      continue;
    }
    for (let horizontalChange of [-1, 0, 1]) {
      if (columnIndex + horizontalChange < 0 || columnIndex + horizontalChange >= array[0].length) {
        continue;
      }
      if (verticalChange === 0 && horizontalChange === 0) {
        continue;
      }
      if (array[rowIndex + verticalChange][columnIndex + horizontalChange]) {
        count++
      }
    }
  }
  return count;
}

function applyRules(cellStatus, count){
  if( cellStatus && count   < 2){ return false }
  if( cellStatus && count  <= 3){ return true  }
  if( cellStatus && count  >= 4){ return false }
  if(!cellStatus && count === 3){ return true  }
  else { return false }
}



