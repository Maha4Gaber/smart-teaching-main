import React, { useEffect, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const Pdf = () => {
  const [articl, setarticl] = useState([]);
  // const navigate=useNavigate()

  const params = useParams();
  useEffect(() => {
    const getdata = async () => {
      try {
        await axios.get("api/v3/articles/"+params.id).then((res) => {
          console.log(res.data);
          setarticl(res.data);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // getdata();
    console.log(params.id);
    // }
  }, []);
  return (
<>
<div className="pt-5 mt-5" dangerouslySetInnerHTML={{ __html: params.id }} ></div>

</>
  );
};
export default Pdf;
