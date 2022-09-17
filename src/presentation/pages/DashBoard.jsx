import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { dashboard } from '../../data/redux/slices/dashboard/thunks';
import Post from '../components/post/Post';


export default function DashBoard() {
    // const { token } = useSelector(state => state.auth);
    const { userPosts } = useSelector(state => state.dashboard);

    // useEffect(() => {
    //     dispatch(dashboard(token));
    // }, []);

    return (
        <Box sx={{ flexGrow: 0 }}>
            {userPosts ?
                <>
                    {
                        userPosts.map((content, index) =>
                            <Post content={content} key={index} />
                        )
                    }
                </>
                :
                <Typography textAlign="center">
                    You have not any post yet.
                </Typography>
            }
        </Box>
    );
}

{/* <Typography key={index} textAlign="center">
                                Title: {post.title}
                                Description: {post.description}
                                Date: {post.published_at}
                            </Typography> */}

