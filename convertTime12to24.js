function convertTo24HrsFormat(time) {
  let getTypeOfDate = time.charAt(time.length - 2);
  let separatorIndx = time.indexOf(":");
  let getHours = time.slice(0, separatorIndx);
  let getMinutes = time.slice(separatorIndx + 1, separatorIndx + 3);

  if (getTypeOfDate === "A") {
    if (getHours === "12") {
      return `00:${getMinutes}`;
    }

    return separatorIndx !== 1
      ? `${getHours}:${getMinutes}`
      : `0${getHours}:${getMinutes}`;
  }

  if (getTypeOfDate === "P") {
    if (getHours !== "12") {
      return `${Number(getHours) + 12}:${getMinutes}`;
    }
    return `${getHours}:${getMinutes}`;
  }
}

module.exports = convertTo24HrsFormat;
