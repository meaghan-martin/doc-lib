import React from 'react';
export const FilterButton = ({tag, onClick}) => {
  return (
    <div className="filterlist">
      <button className="filterButton" onClick={onClick}>{tag}</button>
    </div>
  );
}
