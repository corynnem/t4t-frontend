const validate = {
  email: (email) => {
    if (email === "") {
      return true;
    } else if (
      email !== undefined &&
      email.includes("@") &&
      email.includes(".")
    ) {
      if (
        email.includes("org") ||
        email.includes("gov") ||
        email.includes("edu") ||
        email.includes("com") ||
        email.includes("net") ||
        email.includes("biz") ||
        email.includes("info")
      ) {
        return true;
      }
    } else {
      return false;
    }
  },
  password: (password) => {
    if (password === "") {
      return true;
    } else if (
      password.length > 10 &&
      /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)
    ) {
      return true;
    } else {
      return false;
    }
  },
  pronouns: (pronouns) => {
    // console.log(pronouns)
    if (pronouns === "") {
      return true;
    } else if (pronouns.includes("/")) {
      return true;
    } else {
      return false;
    }
  },
  location: async (location) => {
    if (location === "") {
      return true;
    } else if (location.includes(",")) {
      return true;
    } else {
      return false;
    }
  },
};
export default validate;
