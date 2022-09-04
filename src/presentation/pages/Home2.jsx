import React from 'react'
import Slider from '../components/slider/desktop/Slider'
import Carousel from '../components/carousel/desktop/Carousel'
// import images from '../exports/images'
import Banner from '../components/banner/Banner'
// import casaHome from '../assets/images/maqueta/53ea81f5debce07b7f4d581e978d70b1.jpg'
import NewsCard from '../components/cards/NewsCard'
import ImageList from '../components/images/imageList/ImageList'
import MobileSlider from '../components/slider/MobileSlider'

import '../assets/styles/headContainer.css'
import '../components/images/imageList/desktop/image__list.css'

const Home = () => {
    const mql = window.matchMedia('(max-width: 600px)');
    let mobileView = mql.matches;

    return (
        <>
            {!mobileView ?

                <div className='head__container'>
                    <Slider />
                    <div className='image__list'>
                        <ImageList />
                        <span>
                            view gallery
                        </span>
                    </div>
                </div>
                : <MobileSlider />
            }
            <Banner />
            <NewsCard />
        </>
    )
}

export default Home