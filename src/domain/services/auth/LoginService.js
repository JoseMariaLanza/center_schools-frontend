import Response from '../../validation/validators/protocols/Responses.json';

// eslint-disable-next-line consistent-return
const LoginService = async (email, password) => {
  try {
    const response = await fetch('http://localhost:8000/api/1.1/user/token/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.status === Response.HTTP_OK) {
      // eslint-disable-next-line no-console
      console.log(data);
    }
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export default LoginService;
