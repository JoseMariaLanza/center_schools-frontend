import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import AlertDialogSlide from '../dialogs/AlertDialogSlide';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        title: 'Sudamericano 1995 - Brasil',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida volutpat mauris eu eleifend. Donec sit amet lobortis est. Etiam sit amet mi sit amet elit vestibulum hendrerit. Duis at tellus diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam sodales sed diam in iaculis. Nulla facilisi.',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        title: 'Mundial \'92 - Croacia',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida volutpat mauris eu eleifend. Donec sit amet lobortis est. Etiam sit amet mi sit amet elit vestibulum hendrerit. Duis at tellus diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam sodales sed diam in iaculis. Nulla facilisi.',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        title: 'Bali, Indonesia',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida volutpat mauris eu eleifend. Donec sit amet lobortis est. Etiam sit amet mi sit amet elit vestibulum hendrerit. Duis at tellus diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam sodales sed diam in iaculis. Nulla facilisi.',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
        title: 'Goč, Serbia',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida volutpat mauris eu eleifend. Donec sit amet lobortis est. Etiam sit amet mi sit amet elit vestibulum hendrerit. Duis at tellus diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam sodales sed diam in iaculis. Nulla facilisi.',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

function SwipeableTextMobileStepper({ boxWidth }) {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
    const [open, setOpen] = React.useState(false);
    const [info, setInfo] = React.useState(false);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const handleClickOpen = (step) => {
        setInfo(step)
        setOpen(true);
    };

    return (
        <Box sx={{ maxWidth: boxWidth, flexGrow: 1 }}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <ImageListItem key={step.title}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box>
                                <Box
                                    component="img"
                                    sx={{
                                        display: 'flex',
                                        // minHeight: '100%',
                                        // maxWidth: '100%',
                                        overflow: 'hidden',
                                        width: '100%',
                                    }}
                                    src={step.imgPath}
                                    srcSet={step.imgPath}
                                    alt={step.label}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={step.title}
                                    subtitle={step.description}
                                    actionIcon={
                                        <>
                                            <IconButton
                                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                aria-label={`info about ${step.title}`}
                                                onClick={() => handleClickOpen(step)}
                                            >
                                                <InfoIcon />
                                            </IconButton>
                                        </>
                                    }
                                />
                            </Box>
                        ) : null}
                    </ImageListItem>
                ))}
            </AutoPlaySwipeableViews>
            <AlertDialogSlide info={info} open=
                {open} setOpen={setOpen} />
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}

export default SwipeableTextMobileStepper;
