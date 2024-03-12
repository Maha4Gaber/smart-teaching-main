import React from 'react';
import ServicesHeader from '../../Components/ServicesHeader/ServicesHeader';
import CoursesInfo from '../../Components/CoursesInfo/CoursesInfo';
import Pagination from '../../Components/Pagination/Pagination';
import Course from '../../Components/Course/Course';
import Book from '../../Components/Book/Book';

function BookPage() {
  return (
    <>
      <ServicesHeader
        title='E-Book'
        bold
      />

      <div className='info__layout'>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
      <Pagination />
    </>
  );
}

export default BookPage;
