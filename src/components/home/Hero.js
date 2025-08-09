import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import heroImage from '../../assets/hero-woman.png';
import { FaBriefcase } from 'react-icons/fa';

const Hero = () => {
    const [role, setRole] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (role || location) {
            navigate(`/jobs?role=${role}&location=${location}`);
        }
    };

    const heroStyle = {
      backgroundSize: 'cover',
      backgroundPosition: 'center bottom',
      backgroundRepeat: 'no-repeat'
    };

    return (
        <header className="hero-section" style={heroStyle}>
            <div className="container">
                <div className="hero-wrapper">
                    <div className="hero-text-content">
                        <div className="sparkle one"></div>
                        <h1 className="hero-headline">
                            Find Your <span>Dream Job</span> With Your Interest And Skills
                        </h1>
                        <p className="hero-description">
                           Our platform connects you with thousands of job listings from top companies and startups. Search, find, and apply for your next role all in one place.
                        </p>
                        <form className="hero-search-form" onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="Job Title or Keyword"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            />
                            <select value={location} onChange={(e) => setLocation(e.target.value)}>
                                <option value="">Location</option>
                                <option value="us">USA</option>
                                <option value="uk">United Kingdom</option>
                                <option value="ca">Canada</option>
                            </select>
                            <button type="submit" className="btn-find-job">Find Job</button>
                        </form>
                        <div className="sparkle two"></div>
                    </div>
                    <div className="hero-image-content">
                        <div className="jobs-posted-card">
                            <FaBriefcase className="card-icon" />
                            <div className="card-text">
                                <h4>250+ Jobs</h4>
                                <p>Post Daily</p>
                            </div>
                        </div>
                        <img src={heroImage} alt="Professional woman with a laptop" className="hero-person-img" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;