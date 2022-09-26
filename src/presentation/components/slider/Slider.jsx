import React from 'react';
import Box from '@mui/material/Box';
import Carousel from '../carousel/Carousel';

function Slider() {
  return (
    <Box sx={{
      marginTop: '1rem',
      flexGrow: 1,
      width: '100%',
      height: '100%',
    }}
    >

      <Carousel />

    </Box>
  );
}

export default Slider;
