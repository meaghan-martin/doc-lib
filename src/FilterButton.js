import React from 'react';
export const FilterButton = ({tag, onClick}) => {
  return (
    <div className="filterlist">
      <button onClick={onClick}>{tag}</button>
    </div>
  );
}
