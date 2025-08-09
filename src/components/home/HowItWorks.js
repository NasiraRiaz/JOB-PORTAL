import React from 'react';
import './HowItWorks.css';
import { FaSearch, FaExternalLinkAlt, FaRegHandshake } from 'react-icons/fa';
import TopoBackground from '../../assets/topographic-background.svg';

const HowItWorks = () => {
  const sectionStyle = {
    backgroundImage: `url(${TopoBackground})`
  };

  return (
    <div className="how-it-works-section" style={sectionStyle}>
      <div className="container">
        <p className="process-tag">OUR PROCESS</p>
        <h2 className="section-title">How It Works</h2>
        <div className="steps-grid">
          <div className="step-item">
            <div className="step-icon-container">
              <FaSearch className="step-icon" />
            </div>
            <h3>1. Search A Job</h3>
            <p>
              Explore thousands of job listings aggregated from top sources around the web.
            </p>
          </div>
          <div className="step-item">
            <div className="step-icon-container">
              <FaExternalLinkAlt className="step-icon" />
            </div>
            <h3>2. Apply On Site</h3>
            <p>
              Once you find a job you like, we take you directly to the original job posting to apply.
            </p>
          </div>
          <div className="step-item">
            <div className="step-icon-container">
              <FaRegHandshake className="step-icon" />
            </div>
            <h3>3. Land Your Next Role</h3>
            <p>
              Successfully apply and get ready to connect with top companies and startups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;