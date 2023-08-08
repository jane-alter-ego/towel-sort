function towelSort(matrix) {
  if (!matrix) {
    return [];
  };
  const newMatrix = matrix.map((arr, i) => i % 2 !== 0 ? arr.reverse() : arr);
  return [].concat(...newMatrix);
};


module.exports = towelSort;
