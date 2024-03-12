import React from 'react';
import classes from './SearchText.module.css';
function SearchText() {
  return (
    <div className={classes.searchText}>
      <span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='17'
          height='16'
          viewBox='0 0 17 16'
          fill='none'
        >
          <path
            d='M6.136 11.936L3.048 8.864C3.016 8.82133 3 8.776 3 8.728C3 8.68 3.016 8.63467 3.048 8.592L4.104 7.552C4.136 7.52 4.176 7.504 4.224 7.504C4.272 7.504 4.31733 7.52 4.36 7.552L6.088 9.28C6.12 9.312 6.16 9.328 6.208 9.328C6.256 9.328 6.30133 9.312 6.344 9.28C7.42133 8.128 9.03733 6.41067 11.192 4.128C11.224 4.08533 11.2667 4.064 11.32 4.064C11.3733 4.064 11.416 4.08 11.448 4.112L12.536 5.152C12.5787 5.184 12.6 5.224 12.6 5.272C12.6 5.32 12.584 5.36533 12.552 5.408C11.176 6.85867 9.12267 9.03467 6.392 11.936C6.36 11.9787 6.31733 12 6.264 12C6.21067 12 6.168 11.9787 6.136 11.936Z'
            fill='#5F2DED'
          />
        </svg>
      </span>
      <p>
        Lorem Ipsum is simply dummying text of the printing andtypesetting
        industry
      </p>
    </div>
  );
}

export default SearchText;
