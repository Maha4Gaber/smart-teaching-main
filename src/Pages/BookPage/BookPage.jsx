import React, { useEffect, useState } from "react";
import ServicesHeader from "../../Components/ServicesHeader/ServicesHeader";
// import CoursesInfo from '../../Components/CoursesInfo/CoursesInfo';
// import Pagination from '../../Components/Pagination/Pagination';
// import Course from '../../Components/Course/Course';
import Book from "../../Components/Book/Book";
// import { useNavigate } from 'react-router-dom';
import axios from "axios";

function BookPage() {
  // let navigate = useNavigate();
  const [books, setbooks] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      try {
        await axios.get("api/v3/books").then((res) => {
          // console.log(res.data);
          setbooks(res.data);
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
      <ServicesHeader title="eBooks" bold />

      <div className="info__layout row">
        {books.map((book, idx) => (
          <div className="col-lg-2 col-md-3 col-4 mt-3" key={idx}>
          <Book  book={book} />

          </div>
        ))}
      </div>
      {/* <Pagination /> */}
    </>
  );
}

export default BookPage;
