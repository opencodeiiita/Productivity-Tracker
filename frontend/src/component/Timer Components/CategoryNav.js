import React from 'react';
import './CategoryNav.css';

const CategoryNav = ({ changeCategory, category, fontClass, colorClass }) => {
  function getCategoryName() {
    if (category === 1) {
      return 'pomodoro';
    } else if (category === 2) {
      return 'short-break';
    } else if (category === 3) {
      return 'long-break';
    }
  }

  return (
    <div className="category-container">
      <div className={`category-selector ${getCategoryName()} ${colorClass}`}></div>
      <p className={category === 1 ? `selected ${fontClass}` : fontClass} onClick={() => changeCategory(1)}>
        pomodoro
      </p>
      <p className={category === 2 ? `selected ${fontClass}` : fontClass} onClick={() => changeCategory(2)}>
        short break
      </p>
      <p className={category === 3 ? `selected ${fontClass}` : fontClass} onClick={() => changeCategory(3)}>
        long break
      </p>
    </div>
  );
};

export default CategoryNav;
