import { AuthCenterSchoolsApiConfig } from '../../../authApiConfigs';
import { startLoading, getUserToken, getUserProfile } from './authSlice';
import { clearPosts } from '../publisher/postSlice';

const login = (payload) => async (dispatch) => {
  dispatch(startLoading());

  try {
    const { data } = await AuthCenterSchoolsApiConfig.post('user/token/', payload);

    dispatch(getUserToken(data));

    const userData = await AuthCenterSchoolsApiConfig.get('user/profile/', {
      headers: {
        Authorization: `Token ${data.token}`,
      },
    });

    if (userData) {
      dispatch(getUserProfile(userData.data));
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

const profile = (payload) => async (dispatch) => {
  dispatch(startLoading());

  try {
    const { data } = await AuthCenterSchoolsApiConfig.get('user/profile/', {
      headers: {
        Authorization: `Token ${payload}`,
      },
    });

    if (data) {
      dispatch(getUserProfile(data));
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

const logout = (payload) => async (dispatch) => {
  dispatch(startLoading());

  try {
    const { data } = await AuthCenterSchoolsApiConfig.get('user/logout/', {
      headers: {
        Authorization: `Token ${payload}`,
      },
    });

    if (data) {
      dispatch(logout(data));
      dispatch(clearPosts());
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export { login, profile, logout };
