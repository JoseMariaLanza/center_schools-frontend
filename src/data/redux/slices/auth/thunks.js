import {
  AuthCenterSchoolsApiConfig,
  CenterPublisherPublicApiPost,
} from '../../../apiConfigs';
import { startLoading, setAuth, getUserProfile, clear } from './authSlice';
import { clearPosts } from '../publisher/postSlice';
import { handleError } from '../errorHandlerSlice';
import { noUserData, retrieveUserData } from './userSlice';

const register = (payload) => async (dispatch) => {
  await dispatch(startLoading());

  try {
    const { data } = await AuthCenterSchoolsApiConfig.post(
      'user/create/',
      payload,
    );
    const { data: token } = await AuthCenterSchoolsApiConfig.post(
      'user/token/',
      payload,
    );

    await dispatch(setAuth({ token }));

    const res = await AuthCenterSchoolsApiConfig.get('user/profile/', {
      headers: {
        Authorization: `Token ${data.token}`,
      },
    });

    if (res.status === 201) {
      await dispatch(getUserProfile(res.data));
    } else {
      await dispatch(handleError(res.response.data));
      await dispatch(clear());
    }
  } catch ({ response }) {
    await dispatch(handleError(response.data));
  }
};

const login = (payload) => async (dispatch) => {
  await dispatch(startLoading());

  try {
    const res = await CenterPublisherPublicApiPost('/auth', payload);

    if (res.status === 200) {
      dispatch(setAuth(res.data));
    } else {
      await dispatch(handleError(res.response.data));
      await dispatch(clear());
    }
  } catch ({ response }) {
    await dispatch(handleError(response.data));
    await dispatch(clear());
  }
};

const profile = (payload) => async (dispatch) => {
  await dispatch(startLoading());

  try {
    const res = await AuthCenterSchoolsApiConfig.get('user/profile/', {
      headers: {
        Authorization: `Token ${payload}`,
      },
    });

    if (res.status === 200) {
      await dispatch(getUserProfile(res.data));
    } else {
      await dispatch(handleError(res.response.data));
    }
  } catch ({ response }) {
    dispatch(handleError(response.data));
  }
};

const logout = (payload) => async (dispatch) => {
  await dispatch(startLoading());

  try {
    const res = await AuthCenterSchoolsApiConfig.get('user/logout/', {
      headers: {
        Authorization: `Token ${payload}`,
      },
    });

    if (res.status !== 200) {
      await dispatch(handleError(res.response.data));
    }
    await dispatch(clear());
    await dispatch(clearPosts());
  } catch ({ response }) {
    await dispatch(handleError(response.data));
  }
};

const getUserData = (authdata) => async (dispatch) => {
  try {
    console.log('AUTHDATA IN GET USER DATA: ', authdata);
    await dispatch(retrieveUserData(authdata));
  } catch (error) {
    console.log('ERROR GETING USER DATA: ', error);
    await dispatch(noUserData(error.response));
  }
};

export { register, login, getUserData, profile, logout };
