import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MobileStepper from '@mui/material/MobileStepper';

import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function DesktopCarousel({ images, handleStepChange, activeStep, maxSteps }) {
    const theme = useTheme();

    return (
        <Box sx={{
            position: 'inherit',
            minHeight: '100%',
            minWidth: '100%',
            flexGrow: 1,
            zIndex: -1
        }}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Card sx={{
                                display: 'flex',
                                '--Card-radius': (theme) => theme.vars.radius.xs,
                                // '--Card-height': (theme) => theme.vars.maxHeight,
                                minHeight: '29.5rem',
                                // maxWidth: '50rem'
                            }}>
                                <CardCover>
                                    <img
                                        src={step.imgPath}
                                        alt={step.label}
                                    />
                                </CardCover>
                                <CardCover
                                    sx={{
                                        background:
                                            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                                    }}
                                />
                                <CardContent sx={{ justifyContent: 'flex-end', flexDirection: 'column', alignItems: 'center', marginBottom: '3rem' }}>
                                    <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
                                        Panamericano 1986
                                    </Typography>
                                    <Typography
                                        // startDecorator={<LocationOnRoundedIcon />}
                                        textColor="neutral.300"
                                    >
                                        Master Carlos Centeno, mayor referente de la escuela center con el Gral. Choi
                                    </Typography>
                                </CardContent>
                            </Card>
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>


        </Box>
    );
}

export default DesktopCarousel;
