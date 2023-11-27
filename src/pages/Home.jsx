import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const home = () => {
    return (
        <div className='home'>
            <Header />
            <Banner />
            <Gallery />
            <Footer />
        </div>
    );
};

export default home;