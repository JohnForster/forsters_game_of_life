function isAlive(inputArray, rowIndex, columnIndex){
  let array = inputArray.map(row => row.slice());
  let count = 0;
  // const neighbours = [
  //   [-1,-1],[-1,0],[-1,1],
  //   [ 0,-1],[ 0,0],[ 0,1],
  //   [ 1,-1],[ 1,0],[ 1,1]
  // ];
  // for (let [row, column] of neighbours){
  //   let afa = array
  //   let neighbourRowIndex = row + rowIndex, neighbourColumnIndex = column + columnIndex
  //   if(neighbourRowIndex < 0 || neighbourRowIndex > array.length){ continue; }
  //   if(neighbourColumnIndex < 0 || neighbourColumnIndex > array[0].length){ continue; }
  //   if(afa[rowIndex + row][columnIndex + column]) { count++ }
  // }
  for (let verticalChange = -1; verticalChange <= 1; verticalChange++){
    if (rowIndex + verticalChange < 0 || rowIndex + verticalChange >= array.length) { continue; }
    for (let horizontalChange = -1; horizontalChange <= 1; horizontalChange++) {
      if (columnIndex + horizontalChange < 0 || columnIndex + horizontalChange >= array[0].length) {continue;}
      if (verticalChange === 0 && horizontalChange === 0){ continue; }
      if (array[rowIndex + verticalChange][columnIndex + horizontalChange]) {
       count++
      }
    }
  }
  let alive = array[rowIndex][columnIndex];
  if( alive && count   < 2){ return false }
  if( alive && count  <= 3){ return true  }
  if( alive && count  >= 4){ return false }
  if(!alive && count === 3){ return true  }
  else { return false }
}

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
}
