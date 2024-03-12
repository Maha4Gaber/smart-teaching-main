import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

import './PaginationComp.css'

const PaginationComp = () => {

return (

    <nav aria-label="Page navigation page-nav example mt-4">

        <ul className="pagination justify-content-center">
            <li className="page-item ">
                <Link className="page-link pagination-btns"> <HiOutlineArrowNarrowLeft/> </Link>
            </li>
            
            <li className="page-item"><Link className="page-link" href="#">1</Link></li>
            
            <li className="page-item"><Link className="page-link" href="#">2</Link></li>
            
            <li className="page-item"><Link className="page-link" href="#">3</Link></li>
            
            <li className="page-item">
                <Link className="page-link" href="#"> <HiOutlineArrowNarrowRight/> </Link>
            </li>

        </ul>

    </nav>
)
}

export default PaginationComp