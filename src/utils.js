export const getTags = data => {
  const tagsRaw = data.reduce((tagList, entry) => {
    const entryTags = entry.tags?.split(',');
    entryTags && tagList.push(...entryTags);
    return tagList;
  }, []);
  const tags = [... new Set(tagsRaw)];
  return tags;
}

export const getFilteredData = (data, filterTag) => {
  if ( filterTag?.length <= 0 ) {
    return data;
  }

  const filteredData = data.filter(entry =>  {return entry.tags?.split(',').includes(filterTag)});
  return filteredData;
}
