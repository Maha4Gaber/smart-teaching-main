import React from 'react';

import './Btn.css'
import { useTranslation } from 'react-i18next';
const Btn = ({text ,img}) => {
  const { t } = useTranslation();
  return (
    <div className='btnbox'>
      <div className="img">
        {img?<img className="" src={img} /> :''}
      </div>
      <div className="boxtext">
        {t(text)}
      </div>
    </div>
  );
}

export default Btn;
