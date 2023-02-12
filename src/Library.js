import React, {useState} from 'react';
import {DocTable} from './DocumentTable';
import {FilterList} from './FilterList';
import {getTags, getFilteredData} from './utils';
export const Library = ({data}) => {
  const tags = getTags(data);
  const [filter, setFilter] = useState('');
  return (
    <>
      <div className='TitleContainer'>
        <div className='title'>Resource Library</div>
      </div>
      <div className="library">
        <FilterList tags={tags} filterFunction={setFilter}/>
        <DocTable data={getFilteredData(data, filter)}/>
      </div>
    </>
  );
}
