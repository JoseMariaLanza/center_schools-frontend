import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import PostCard from '../components/post/PostCard';

function DashBoard() {
  const { userPosts } = useSelector((state) => state.dashboard);

  return (
    <Box sx={{ flexGrow: 0 }}>
      {userPosts ? (
        <>
          {userPosts.map((content) => (
            // eslint-disable-next-line no-underscore-dangle
            <PostCard content={content} key={content._id} />
          ))}
        </>
      ) : (
        <Typography textAlign="center">You have not any post yet.</Typography>
      )}
    </Box>
  );
}

export default DashBoard;
