import React from 'react';
import Hero from '../components/home/Hero';
import Categories from '../components/home/Categories';
import HowItWorks from '../components/home/HowItWorks';
import AboutSection from '../components/home/AboutSection';

const Home = () => {
    return (
        <div>
            <Hero />
            <Categories />
            <HowItWorks />
            <AboutSection />
        </div>
    );
};

export default Home;