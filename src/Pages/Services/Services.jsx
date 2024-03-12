import React, { useState } from 'react';
import classes from './Services.module.css';
import ServicesHeader from '../../Components/ServicesHeader/ServicesHeader';
import ServicesInfo from '../../Components/ServicesInfo/ServicesInfo';
const Services = () => {
  const [expert, setExpert] = useState(true);
  function expertHandler() {
    setExpert((prevState) => !prevState);
  }
  return (
    <>
      <ServicesHeader
        title='"Expert Teacher" training program'
        onExpert={expertHandler}
        nav
      />
      <ServicesInfo expert={expert} />
    </>
  );
};

export default Services;
