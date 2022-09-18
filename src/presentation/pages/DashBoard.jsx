import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Post from '../components/post/Post';


export default function DashBoard() {
    const { userPosts } = useSelector(state => state.dashboard);

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

