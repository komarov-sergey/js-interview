function titleCase(inStr) {
  return inStr
    .trim()
    .toLowerCase()
    .split(" ")
    .map((str) => str[0].toUpperCase() + str.slice(1))
    .join(" ");
}

module.exports = titleCase;
