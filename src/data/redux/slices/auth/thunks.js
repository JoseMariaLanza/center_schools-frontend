import { authApiService } from '../../../../domain/services/auth/authApiService';
import { startLoading, setUserToken, getUserProfile } from './authSlice'

const login = (payload) => {
    return async (dispatch, getState) => {
        dispatch(startLoading());

        // const data = await LoginService(payload)

        try {
            const { data } = await authApiService.post('user/token/', payload);

            // if (status !== Response.HTTP_OK) {
            //     alert('Ocurrió un error');
            // }

            dispatch(setUserToken(data));
        } catch (error) {

        }

    }
}

const profile = (payload) => {
    return async (dispatch, getState) => {
        dispatch(startLoading());

        try {
            const { data } = await authApiService.get('user/profile/', {
                headers: {
                    'Authorization': `Token ${payload}`
                }
            });

            console.log('USER PROFILE: ', data)

            dispatch(getUserProfile(data));
        } catch (error) {

        }

    }
}

export { login, profile };
