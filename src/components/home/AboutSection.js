import React from 'react';
import './AboutSection.css';
import aboutImage from '../../assets/about-section-image.jpg';

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="row">
                    <div className="text-column">
                        <div className="about-text-content">
                            <span className="section-subtitle">WHAT WE ARE DOING</span>
                            <h2 className="about-headline">
                                Connecting Talent with Opportunity
                            </h2>
                            <p className="about-description">
                                At CareerCanvas, our mission is to bridge the gap between talented professionals and innovative companies. We believe that the right job can transform a person's life and that the right person can transform a business.
                            </p>
                            <p className="about-description">
                                Our platform provides the tools and insights needed to navigate the job market with confidence, connecting thousands of skilled individuals with top-tier jobs every single day.
                            </p>
                        </div>
                    </div>
                    <div className="image-column">
                        <div className="about-image-content">
                            <img src={aboutImage} alt="Professional team member" className="about-img" />
                            <div className="since-box">
                                <h5>Since</h5>
                                <h3>2025</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;