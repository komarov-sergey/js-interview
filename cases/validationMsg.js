const backendErrors = {
  email: {
    errors: [
      {
        message: "Can't be blank",
      },
    ],
  },
  password: {
    errors: [
      {
        message: "Must contain symbols in different case",
      },
      {
        message: "Must be at least 8 symbols length",
      },
    ],
  },
  passwordConfirmation: {
    errors: [
      {
        message: "Must match with password",
      },
    ],
  },
};

function mapper(errors) {
  return Object.entries(errors).map((elem, i) => {
    let errorsMsgs = elem[1].errors.reduce(
      (acc, current, currentIndx) =>
        currentIndx === 0
          ? (acc += current.message)
          : (acc += `, ${current.message}`),
      ""
    );

    const isUpperCase = /[A-Z]/.test(elem[0]);

    return `${
      isUpperCase ? elem[0] : elem[0].charAt(0).toUpperCase() + elem[0].slice(1)
    }: ${errorsMsgs}`;
  });
}

module.exports = {
  backendErrors,
  mapper,
};
