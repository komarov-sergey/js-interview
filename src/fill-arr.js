function fill(arr, val, start = 0, end = arr.length) {
  return arr.map((elem, i) => (i >= start && i < end ? (elem = val) : elem));
}

module.exports = { fill };
