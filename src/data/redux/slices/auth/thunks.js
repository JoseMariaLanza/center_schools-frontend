import { AuthCenterSchoolsApiConfig } from '../../../authApiConfigs';
import { startLoading, getUserToken, getUserProfile } from './authSlice';
import { clearPosts } from '../publisher/postSlice';

const login = (payload) => {
    return async (dispatch, getState) => {
        dispatch(startLoading());

        try {
            const { data } = await AuthCenterSchoolsApiConfig.post('user/token/', payload);

            dispatch(getUserToken(data));

            const userData = await AuthCenterSchoolsApiConfig.get('user/profile/', {
                headers: {
                    'Authorization': `Token ${data.token}`
                }
            });

            if (userData) {
                dispatch(getUserProfile(userData.data));
            }

        } catch (error) {
            console.log(error);
        }

    }
}

const profile = (payload) => {
    return async (dispatch, getState) => {
        dispatch(startLoading());

        try {
            const { data } = await AuthCenterSchoolsApiConfig.get('user/profile/', {
                headers: {
                    'Authorization': `Token ${payload}`
                }
            });

            if (data) {
                dispatch(getUserProfile(data));
            }

        } catch (error) {
            console.log(error);
        }
    }
}

const logout = (payload) => {
    return async (dispatch, getState) => {
        dispatch(startLoading());

        try {
            const { data } = await AuthCenterSchoolsApiConfig.get('user/logout/', {
                headers: {
                    'Authorization': `Token ${payload}`
                }
            });

            console.log('LOGOUT: ', data);

            if (data) {
                dispatch(logout(data));
                dispatch(clearPosts())
            }

        } catch (error) {
            console.log(error);
        }
    }
}



export { login, profile, logout };
