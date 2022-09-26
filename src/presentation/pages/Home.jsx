import React from 'react';
import Slider from '../components/slider/Slider';
// import images from '../exports/images'
// import Banner from '../components/banner/Banner'
// import NewsCard from '../components/cards/NewsCard'
import ImageList from '../components/images/imageList/ImageList';

import '../assets/styles/headContainer.css';
import '../components/images/imageList/imageList.css';

function Home() {
  return (
    <div className="container">
      <div className="head__container">
        <Slider sx={{
          gridArea: '1 / 1 / 2 / 2',
        }}
        />
        <div className="image__list">
          <ImageList />
          <span>
            view gallery
          </span>
        </div>
      </div>
      {/* <Banner />
        <NewsCard /> */}
    </div>
  );
}

export default Home;
