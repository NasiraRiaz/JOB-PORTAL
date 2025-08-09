import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useJobDetails from '../hooks/useJobDetails';
import Loader from '../components/Loader';
import PageHeader from '../components/PageHeader';
import './JobDetails.css';

const formatDate = (dateString) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString("en-US", {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric'
    });
};

const JobDetails = () => {
    const { id } = useParams();
    const { job, isLoading, error } = useJobDetails(id);

    if (isLoading) return <Loader />;
    if (error) return <div className="container my-5 alert alert-danger">{error}</div>;
    if (!job) return <div className="container my-5">Job not found.</div>;

    return (
        <> 
            <PageHeader title={"Job Details"} />

            <div className="details-container">
                <Link to="/jobs" className="btn btn-back">← Back</Link>

                <h1 className="details-title">{job.job_title}</h1>
                <p className="details-employer">Employer: {job.employer_name}</p>
                <p className="details-location">Location: {job.job_city}, {job.job_state}</p>
                <p className="details-meta">Type: {job.job_employment_type}</p>
                <p className="details-meta posted-date">Posted on: {formatDate(job.job_posted_at_datetime_utc)}</p>

                <div className="details-section">
                    <h5 className="section-title">Job Description:</h5>
                    <div className="description-text" dangerouslySetInnerHTML={{ __html: job.job_description }} />
                </div>

                {job.job_highlights && Object.entries(job.job_highlights).map(([title, items]) => (
                    <div className="details-section" key={title}>
                        <h5 className="section-title">{title}:</h5>
                        <ul className="details-list">
                            {items.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>
                ))}

                <div className="apply-wrapper">
                    <a href={job.job_apply_link} target="_blank" rel="noopener noreferrer" className="btn-apply-now">
                        Apply Now
                    </a>
                </div>
            </div>
        </>
    );
};

export default JobDetails;