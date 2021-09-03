
export const validate = ( value ) => {
  const error = {};

  if ( !value.fname.trim() ) {
    error.fname = "First Name is required";
  }

  if ( !value.lname.trim() ) {
    error.lname = "Last name is required";
  }

  else if (!/^[A-Za-z]+/.test(value.lname)) {
    error.lname = "Last name is not valid";
  }

  if (!value.email) {
    error.email = "Email is required"
  }
  else if ( !/\S+@\S+\.\S+/g.test(value.email) ) {
    error.email = "Email is not valid";
  }

  // password
  if ( !value.password ) {
    error.password = "Password is required";
  }

  else if ( value.password.length < 6 ) {
    error.password = "Password length should minimun 6 character";
  }

  else if ( value.password.length > 12 ) {
    error.password = "Password length should maximum 12 character";
  }

  if ( !value.confirm_passowrd ) {
    error.cnfm_pswd = "Confirm password is required";
  }

  else if ( value.confirm_password === value.password ) {
    error.cnfm_pswd = "Confirm password don't match";
  }

  return error;
}
