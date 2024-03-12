import React from 'react';
import classes from './SearchClass.module.css';
import SearchText from '../SearchText/SearchText';
const SearchClass = () => {
  return (
    <div className={classes.search__class}>
      <h2>Why search Is Important ?</h2>
      <SearchText />
      <SearchText />
      <SearchText />
      <SearchText />
    </div>
  );
};

export default SearchClass;
