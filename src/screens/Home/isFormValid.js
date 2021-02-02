export const isFormValid = (name, email, password, phone, address) => {
  return name === ''
    ? prepareResponse(false, 'name', 'Name is empty')
    : email === ''
    ? prepareResponse(false, 'email', 'Email is Empty')
    : !email.includes('@') || !email.includes('.')
    ? prepareResponse(false, 'email', 'Enter a valid email')
    : prepareResponse(true, '', '');
  // : password === ''
  // ? prepareResponse(false, 'password', 'Password is empty')
  // : password.length < 6
  // ? prepareResponse(false, 'password', 'Password must be 6 characters long')
  // : phone === ''
  // ? prepareResponse(false, 'phone', 'Phone number is empty')
  // : phone.length !== 11
  // ? prepareResponse(false, 'phone', 'Phone number must have 11 digits')
  // : phone.substring(0, 1) !== '0'
  // ? prepareResponse(false, 'phone', 'Number must start with 0')
  // : address === ''
  // ? prepareResponse(false, 'address', 'Address is empty')
};

const prepareResponse = (status, category, msg) => {
  return {
    status: status,
    errMsg: msg,
    errCategory: category,
  };
};
