import React from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Carousel from '../../carousel/desktop/Carousel'
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import './carouselContainer.css'


const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

const Slider = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexGrow: 1,
                maxWidth: '80%',
                // flexDirection: 'column',
                // alignItems: 'center'
                justifyContent: 'center'
            }}>


                <div className='carousel__container'>
                    <MobileStepper
                        steps={maxSteps}
                        // position='relative'
                        activeStep={activeStep}
                        variant='none'
                        sx={{
                            position: 'relative',
                            backgroundColor: 'white',
                            opacity: '0.4',
                            minHeight: '100%',
                        }}
                        backButton={
                            <Button
                                // size="small"
                                sx={{ minHeight: '100%' }}
                                onClick={handleBack}
                                disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                            </Button>
                        }
                    />

                    <Carousel images={images} handleStepChange={handleStepChange} activeStep={activeStep} maxSteps={maxSteps} />

                    <MobileStepper
                        steps={maxSteps}
                        sx={{
                            position: 'relative',
                            alignSelf: 'flex-end',
                            maxHeight: '.5rem',
                            backgroundColor: 'white',
                            opacity: '0.7',
                            borderRadius: '50px',
                            margin: '1rem'
                        }}
                        activeStep={activeStep}
                    />

                    <MobileStepper
                        steps={maxSteps}
                        // position="relative"
                        activeStep={activeStep}
                        variant='none'
                        sx={{
                            position: 'relative',
                            backgroundColor: 'white',
                            opacity: '0.4',
                            minHeight: '100%',
                        }}
                        nextButton={
                            <Button
                                // size="small"
                                sx={{ minHeight: '100%' }}
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                            >
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                            </Button>
                        }
                    />
                </div>



            </Box>
        </>
    )
}

export default Slider