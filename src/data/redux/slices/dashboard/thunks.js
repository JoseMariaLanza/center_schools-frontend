import { AuthCenterPublisherApiConfig } from "../../../authApiConfigs";
import { startLoading as startLoadingPosts, setUserPosts } from '../publisher/postSlice';
import { getUserProfile } from '../auth/authSlice'
import { startLoading, setDashboardData } from "./dashboardSlice";

const dashboard = (payload) => {
    return async (dispatch, getState) => {
        dispatch(startLoading());
        dispatch(startLoadingPosts());

        console.log('DASHBOARD PAYLOAD: ', payload);

        try {
            const { auth } = await getState(getUserProfile);
            const { userData } = auth;
            console.log('USER DATA: ', userData);
            const { user: user_id } = userData;

            const { data } = await AuthCenterPublisherApiConfig.get(`/${user_id}`, {
                headers: {
                    'Authorization': `Token ${payload}`
                }
            });

            if (data) {
                console.log('POSTS: ', data)
                dispatch(setUserPosts(data));
                dispatch(setDashboardData(data));
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export { dashboard };