import React from 'react';
import {FilterButton} from './FilterButton';
export const FilterList = ({tags, filterFunction}) => {
  const sortedTags = tags.sort();
  return (
    <div className='filterListContainer'>
      <div className='filterListTitle'>Filter</div>
      <div className="filterlist">
        {sortedTags.map(tag => <FilterButton key={tag} tag={tag} onClick={()=>filterFunction(tag)}/>)}
      </div>
    </div>
  );
}
