import React from 'react';
import PageHeader from '../components/PageHeader';
import AboutSection from '../components/home/AboutSection';

const AboutPage = () => {
    return (
        <div>
            <PageHeader title="About Us" />
            <AboutSection />
        </div>
    );
};

export default AboutPage;