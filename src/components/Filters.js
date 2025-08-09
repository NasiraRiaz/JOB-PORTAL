import React, { useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import './Filters.css';

const Filters = ({ onApplyFilters, onClearFilters }) => {
  const initialState = {
    role: '',
    location: '',
    jobType: [],
    experience: [],
    postedWithin: ''
  };

  const [filters, setFilters] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    const currentValues = filters[name];
    const newValues = checked
      ? [...currentValues, value]
      : currentValues.filter(item => item !== value);
    setFilters(prev => ({ ...prev, [name]: newValues }));
  };
  
  const handleRadioChange = (e) => {
      setFilters(prev => ({ ...prev, postedWithin: e.target.value }));
  }

  const handleApply = () => {
    onApplyFilters(filters);
  };

  const handleClear = () => {
    setFilters(initialState);
    onClearFilters();
  };

  return (
    <div className="filter-sidebar">
      <div className="filter-header">
        <FiFilter className="filter-icon" />
        <h3>Filter Jobs</h3>
      </div>

      <div className="filter-body">
        <div className="filter-group">
          <h6>Job Role / Title</h6>
          <input name="role" type="text" className="form-control" placeholder="e.g., Software Engineer" value={filters.role} onChange={handleInputChange} />
        </div>
        
        <div className="filter-group">
          <h6>Location</h6>
          <input name="location" type="text" className="form-control" placeholder="e.g., New York, USA" value={filters.location} onChange={handleInputChange} />
        </div>

        <div className="filter-group">
          <h6>Job Type</h6>
          {['Full Time', 'Part Time', 'Contractor', 'Internship', 'On-site', 'Remote', 'Hybrid'].map(type => (
            <label className="custom-checkbox" key={type}> {type}
              <input type="checkbox" name="jobType" value={type.toUpperCase().replace(' ', '')} checked={filters.jobType.includes(type.toUpperCase().replace(' ', ''))} onChange={handleCheckboxChange} />
              <span className="checkmark"></span>
            </label>
          ))}
        </div>

        <div className="filter-group">
          <h6>Experience Level</h6>
          {['Entry Level', 'Mid Level', 'Senior Level', 'Expert'].map(exp => (
            <label className="custom-checkbox" key={exp}> {exp}
              <input type="checkbox" name="experience" value={exp} checked={filters.experience.includes(exp)} onChange={handleCheckboxChange} />
              <span className="checkmark"></span>
            </label>
          ))}
        </div>

        <div className="filter-group">
            <h6>Posted Within</h6>
            {['Any', 'Today', 'Last 3 days', 'Last 7 days', 'Last 14 days'].map(date => (
                <label className="custom-checkbox" key={date}> {date}
                    <input type="radio" name="postedWithin" value={date} checked={filters.postedWithin === date} onChange={handleRadioChange} />
                    <span className="checkmark radio"></span>
                </label>
            ))}
        </div>
      </div>
      
      <div className="filter-footer">
        <button className="btn-apply" onClick={handleApply}>Apply Filters</button>
        <button className="btn-clear" onClick={handleClear}>Clear Filters</button>
      </div>
    </div>
  );
};

export default Filters;