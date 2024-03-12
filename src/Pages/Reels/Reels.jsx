import React from 'react';
import ServicesHeader from '../../Components/ServicesHeader/ServicesHeader';
import ReelsAll from '../../Components/ReelsAll/ReelsAll';

const Reels = () => {
  return (
    <>
      <ServicesHeader
        title='Reels'
        bold={true}
      />
      <ReelsAll />
    </>
  );
};

export default Reels;
