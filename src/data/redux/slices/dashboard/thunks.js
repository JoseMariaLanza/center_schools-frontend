import { CenterPublisherApiConfig } from '../../../apiConfigs';
import {
  startLoading as startLoadingPosts,
  setUserPosts,
} from '../publisher/postSlice';
import { getUserProfile } from '../auth/authSlice';
import { startLoading, setDashboardData } from './dashboardSlice';

const dashboard = (payload) => async (dispatch, getState) => {
  dispatch(startLoading());
  dispatch(startLoadingPosts());

  try {
    const { auth } = await getState(getUserProfile);
    const { userData } = auth;
    const { user: userId } = userData;

    const { data } = await CenterPublisherApiConfig.get(
      `/posts/${userId}`,
      payload,
    );

    if (data) {
      dispatch(setUserPosts(data));
      dispatch(setDashboardData(data));
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export default { dashboard };
