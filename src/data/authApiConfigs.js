import axios from 'axios';

const AuthCenterSchoolsApiConfig = axios.create({
  baseURL: 'http://localhost:8000/api/1.1',
});

const AuthCenterPublisherApiConfig = axios.create({
  baseURL: 'http://localhost:4000/api/posts/',
});

export { AuthCenterSchoolsApiConfig, AuthCenterPublisherApiConfig };
