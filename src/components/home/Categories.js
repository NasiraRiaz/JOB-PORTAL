import React from 'react';
import './Categories.css';
import { IoBrushOutline, IoTerminalOutline, IoMegaphoneOutline, IoPhonePortraitOutline, IoConstructOutline, IoCodeSlashOutline, IoHomeOutline, IoNewspaperOutline } from 'react-icons/io5';

const categoryData = [
  { icon: <IoBrushOutline />, title: 'Design & Creative', count: 653 },
  { icon: <IoTerminalOutline />, title: 'Design & Development', count: 658 },
  { icon: <IoMegaphoneOutline />, title: 'Sales & Marketing', count: 658 },
  { icon: <IoPhonePortraitOutline />, title: 'Mobile Application', count: 658 },
  { icon: <IoConstructOutline />, title: 'Construction', count: 658 },
  { icon: <IoCodeSlashOutline />, title: 'Information Technology', count: 658 },
  { icon: <IoHomeOutline />, title: 'Real Estate', count: 658 },
  { icon: <IoNewspaperOutline />, title: 'Content Writer', count: 658 },
];

const Categories = () => {
  return (
    <div className="categories-section">
      <div className="container">
        <h2 className="section-heading">Browse Top Categories</h2>
        <div className="categories-grid">
          {categoryData.map((category, index) => (
            <div className="category-card" key={index}>
              <div className="icon-container">
                {category.icon}
              </div>
              <h4 className="category-title">{category.title}</h4>
              <p className="category-count">({category.count})</p>
            </div>
          ))}
        </div>
        <div className="browse-all-container">
            <button className="browse-all-btn">Browse All Sectors</button>
        </div>
      </div>
    </div>
  );
};

export default Categories;