import React, { useEffect, useState } from 'react';
import ServicesHeader from '../../Components/ServicesHeader/ServicesHeader';
import CoursesInfo from '../../Components/CoursesInfo/CoursesInfo';
import Pagination from '../../Components/Pagination/Pagination';
import Course from '../../Components/Course/Course';
import Book from '../../Components/Book/Book';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function BookPage() {
  let navigate = useNavigate();
  const [books, setbooks] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      try {
        await axios.get("api/v3/books").then((res) => {
          console.log(res.data);
          setbooks(res.data)
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // if (!localStorage.user_data) navigate("login");
    // else {
      getdata();
    // }
  }, []);
  return (
    <>
      <ServicesHeader
        title='E-Book'
        bold
      />

      <div className='info__layout'>
      {books.map((book, idx) => (
        <Book key={idx} book={book} />
       ))}
      </div>
      {/* <Pagination /> */}
    </>
  );
}

export default BookPage;
