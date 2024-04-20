import React from 'react'
import './EvidenceDesc.css'
import parse from 'html-react-parser';

const EvidenceDesc = ({title='', desc=''}) => {
  return (
    <div className="evidence-comp">
      <h2 className="mb-5">{title}</h2>
      <div className="evidence-desc position-relative ">
        <p>{parse(desc)}</p>
      </div>
    </div>
  );
}

export default EvidenceDesc