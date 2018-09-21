function processErrorMessage(err) {
  if (err.message) {
    switch (err.message) {
      case "userFirstNameRequired":
        return { status: 400, message: 'User "first_name" is required' };
      case "userLastNameRequired":
        return { status: 400, message: 'User "last_name" is required' };
      case "userEmailRequired":
        return { status: 400, message: 'User "email" is required' };
      case "userPasswordRequired":
        return { status: 400, message: 'User "password" is required' };
      case "userInfoInvalid":
        return { status: 404, message: "User email or password is invalid" };
      default:
        return {
          status: 500,
          message: "An internal server error has occurred."
        };
    }
  }
}

module.exports = processErrorMessage;