import React, { useState, useCallback } from 'react';
import useJobSearch from '../hooks/useJobSearch';
import JobCard from '../components/JobCard';
import Filters from '../components/Filters';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';
import PageHeader from '../components/PageHeader';

const Jobs = () => {
  const [searchParams, setSearchParams] = useState({ query: 'Software developer in USA', params: {} });
  const [currentPage, setCurrentPage] = useState(1);
  const { data: jobs, isLoading, error } = useJobSearch(searchParams.query, currentPage, searchParams.params);

  const handleApplyFilters = useCallback((filters) => {
    let query = filters.role || 'Developer';
    if (filters.location) {
      query += ` in ${filters.location}`;
    }

    const apiParams = {};
    if (filters.jobType.length > 0) {
      apiParams.employment_types = filters.jobType.join(',');
    }

    if (filters.postedWithin && filters.postedWithin !== 'Any') {
      if (filters.postedWithin === 'Today') apiParams.date_posted = 'today';
      if (filters.postedWithin === 'Last 3 days') apiParams.date_posted = '3days';
      if (filters.postedWithin === 'Last 7 days') apiParams.date_posted = 'week';
      if (filters.postedWithin === 'Last 14 days') apiParams.date_posted = '2weeks';
    }
    
    setSearchParams({ query, params: apiParams });
    setCurrentPage(1);
  }, []);

  const handleClearFilters = useCallback(() => {
    setSearchParams({ query: 'Software developer in USA', params: {} });
    setCurrentPage(1);
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-lg-3">
            <Filters onApplyFilters={handleApplyFilters} onClearFilters={handleClearFilters} />
          </div>
          <div className="col-lg-9">
            {isLoading && <Loader />}
            {error && !isLoading && <div className="alert alert-danger">{error}</div>}
            {!isLoading && !error && (
              <>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                  {jobs && jobs.length > 0 ? (
                    jobs.map((job) => (
                      <div className="col" key={job.job_id}><JobCard job={job} /></div>
                    ))
                  ) : (
                    <div className="col-12 text-center py-5"><h4>No Jobs Found</h4></div>
                  )}
                </div>
                {jobs && jobs.length > 0 && <Pagination currentPage={currentPage} totalPages={10} onPageChange={handlePageChange} />}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Jobs;