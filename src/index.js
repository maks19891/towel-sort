
// You should implement your task here.

module.exports = function towelSort (matrix) {
let result = [];
  
    if (!matrix) {
      return [];
    } else {
      for (let y = 0; y < matrix.length; y++) {
          for (let x = 0; x < matrix[y].length; x++) {
              let columnIndex = y % 2 === 0 ? x : matrix[y].length - x - 1;
              result.push(matrix[y][columnIndex]);
          }
      }
  
      return result;
    }
  }
