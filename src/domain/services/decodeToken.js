// import jwt from 'jsonwebtoken';
import { useJwt } from 'react-jwt';

// function jwtDecoder({ data }) {
function decodeToken({ token }) {
  // const decoded = jwt.decode(data, process.env.REACT_APP_JWT_KEY);
  const { decodedToken } = useJwt(token);

  return decodedToken;
}

// function updateToken({ token }) {
//   const { reEvaluateToken } = useJwt(token);

//   return updatedToken;
// }

export default decodeToken;
