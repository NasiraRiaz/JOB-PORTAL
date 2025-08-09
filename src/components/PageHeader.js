import React from 'react';
import './PageHeader.css';
import headerBg from '../assets/page-header-bg3.jpg';

const PageHeader = ({ title }) => {
  return (
    <div className="page-header" style={{ backgroundImage: `url(${headerBg})` }}>
      <div className="page-header-overlay"></div>
      <div className="container">
        <h1 className="page-title">{title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;