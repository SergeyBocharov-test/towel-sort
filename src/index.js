
// You should implement your task here.

module.exports = function towelSort (matrix) {
  function reverseEverySecondItem (matrix) {
    for (let i = 1; i <= (matrix.length - 1); i++) {
      matrix[i].reverse()
      i++
    }
    return matrix
  }
  if (typeof(matrix) !== ('undefined' || null) ){
    if (matrix.length !== 0) {
      return reverseEverySecondItem(matrix).toString().split(',')
    } else {
      return [] //matrix is undefined
    }
  } else {
    return [] //matrix is undefined
  } 
}
