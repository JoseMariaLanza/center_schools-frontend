import {
  AuthCenterSchoolsApiConfig,
  CenterPublisherPublicApiPost,
} from '../../../apiConfigs';
import { startLoading, setAuth, getUserProfile, clear } from './authSlice';
import { clearPosts } from '../publisher/postSlice';
import { handleError } from '../errorHandlerSlice';

const register = (payload) => async (dispatch) => {
  dispatch(startLoading());

  try {
    const { data } = await AuthCenterSchoolsApiConfig.post(
      'user/create/',
      payload,
    );
    const { data: token } = await AuthCenterSchoolsApiConfig.post(
      'user/token/',
      payload,
    );

    dispatch(setAuth({ token }));

    const res = await AuthCenterSchoolsApiConfig.get('user/profile/', {
      headers: {
        Authorization: `Token ${data.token}`,
      },
    });

    if (res.status === 201) {
      dispatch(getUserProfile(res.data));
    } else {
      dispatch(handleError(res.response.data));
      dispatch(clear());
    }
  } catch ({ response }) {
    dispatch(handleError(response.data));
  }
};

const login = (payload) => async (dispatch) => {
  dispatch(startLoading());

  try {
    const res = await CenterPublisherPublicApiPost('/auth', payload);

    if (res.status === 200) {
      dispatch(setAuth(res.data));
    } else {
      dispatch(handleError(res.response.data));
      dispatch(clear());
    }
  } catch ({ response }) {
    dispatch(handleError(response.data));
    dispatch(clear());
  }
};

const profile = (payload) => async (dispatch) => {
  dispatch(startLoading());

  try {
    const res = await AuthCenterSchoolsApiConfig.get('user/profile/', {
      headers: {
        Authorization: `Token ${payload}`,
      },
    });

    if (res.status === 200) {
      dispatch(getUserProfile(res.data));
    } else {
      dispatch(handleError(res.response.data));
    }
  } catch ({ response }) {
    dispatch(handleError(response.data));
  }
};

const logout = (payload) => async (dispatch) => {
  dispatch(startLoading());

  try {
    const res = await AuthCenterSchoolsApiConfig.get('user/logout/', {
      headers: {
        Authorization: `Token ${payload}`,
      },
    });

    if (res.status !== 200) {
      dispatch(handleError(res.response.data));
    }
    dispatch(clear());
    dispatch(clearPosts());
  } catch ({ response }) {
    dispatch(handleError(response.data));
  }
};

export { register, login, profile, logout };
