import axios from 'axios';
// import jwt from 'jsonwebtoken';

const AuthCenterSchoolsApiConfig = axios.create({
  baseURL: 'http://localhost:8000/api/1.1',
});

const CenterPublisherPublicApiConfig = axios.create({
  baseURL: 'http://localhost:4000/api',
});

const CenterPublisherApiConfig = (token) => {
  try {
    return axios.create({
      baseURL: 'http://localhost:4000/api',
      headers: {
        Authorization: `Token ${token}`,
      },
    });
  } catch (error) {
    return error;
  }
};

const CenterPublisherPublicApiPost = async (route, payload) => {
  try {
    // const encodedPayload = jwt.sign(payload, process.env.REACT_APP_JWT_KEY);

    const res = await CenterPublisherPublicApiConfig.post(route, payload);
    // {
    //   token: encodedPayload,
    // });
    return res;
  } catch (error) {
    return error;
  }
};

const CenterPublisherApiPost = async (route, payload) => {
  try {
    // const encodedPayload = jwt.sign(payload, process.env.REACT_APP_JWT_KEY);

    const res = await CenterPublisherApiConfig.post(route, {
      payload,
      // token: encodedPayload,
    });
    return res;
  } catch (error) {
    return error;
  }
};

export {
  AuthCenterSchoolsApiConfig,
  CenterPublisherApiConfig,
  CenterPublisherPublicApiPost,
  CenterPublisherApiPost,
};
