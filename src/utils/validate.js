export const checkValidateData = (fullName, email, password) => {
  if (!email || !password) {
    return "All fields are required! Please fill all fields!";
  }

  if (fullName !== null) {
    if (fullName.length < 3) {
      return "Full name should be at least 3 characters long";
    }
  }

  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(email).toLowerCase())) {
    return "Email is not valid";
  }

  const re2 = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  if (!re2.test(password)) {
    return "Password should contains at least one lowercase letter, one uppercase letter, one number and one special character";
  }

  return null;
};
