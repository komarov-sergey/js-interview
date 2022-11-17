const { backendErrors, mapper } = require("../cases/validationMsg");

test("validate BE error messages", () => {
  let output = [
    "Email: Can't be blank",
    "Password: Must contain symbols in different case, Must be at least 8 symbols length",
    "passwordConfirmation: Must match with password",
  ];

  console.log(mapper(backendErrors));

  expect(mapper(backendErrors)).toEqual(output);
});
