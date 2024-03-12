import React from 'react';
import classes from './ProfileHeader.module.css';
import Camera from '../../assests/Camera';
import Avatar from '../../assests/profile_avatar.png';
const ProfileHeader = () => {
  return (
    <div className={classes.profile_header}>
      <div className={classes.profile_info}>
        <img
          src={Avatar}
          alt='profileavatar'
        />
        <div className={classes.profile_data}>
          <h6>Hello</h6>
          <h2>Abdelrhman Abdelbadea</h2>
        </div>
      </div>
      <div className={classes.profile_upload}>
        <button>
          Change your profile picture <Camera />
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
