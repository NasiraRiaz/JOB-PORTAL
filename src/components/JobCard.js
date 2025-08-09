import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './JobCard.css'; // Make sure this CSS file exists
import defaultLogo from '../assets/default-logo.png'; // Import the new placeholder image

const timeAgo = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    let interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " days ago";
    return "Today";
};

const JobCard = ({ job }) => {
    // State to manage the logo source
    const [logoSrc, setLogoSrc] = useState(job.employer_logo || defaultLogo);

    // This function will be called if the company logo from the API fails to load
    const handleLogoError = () => {
        setLogoSrc(defaultLogo);
    };

    return (
        <div className="job-card h-100 d-flex flex-column">
            <div className="p-3">
                {/* 
                  - src is now managed by state.
                  - onError will call our handler if the image link is broken.
                */}
                <img 
                    src={logoSrc} 
                    alt={`${job.employer_name} Logo`} 
                    className="company-logo"
                    onError={handleLogoError} 
                />

                <h5 className="job-title mt-3">{job.job_title}</h5>
                <p className="company-name">{job.employer_name}</p>
                <span className="location">{job.job_city || 'Remote'}</span>
                <span className="posted-at ms-2">• {timeAgo(job.job_posted_at_datetime_utc)}</span>
            </div>
            <div className="mt-auto p-3">
                <Link to={`/job/${job.job_id}`} className="btn btn-primary w-100">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default JobCard;