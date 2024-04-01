import React from 'react';
import classes from './FollowUs.module.css';
import FaceBookIcon from '../../assests/FaceBookIcon';
import TwitterIcon from '../../assests/TwitterIcon';
import VIcon from '../../assests/VIcon';
import YoutubeIcon from '../../assests/YoutubeIcon';
import LeftHeading from '../LeftHeading/LeftHeading';
import SingleCourse from '../SingleCourse/SingleCourse';
import Social from '../Social/Social';
const FollowUs = () => {
  return (
    <div className={classes.follow__us}>
      <LeftHeading>Follow Us</LeftHeading>
      <Social />
    </div>
  );
};

export default FollowUs;
